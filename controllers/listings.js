const Listing = require("../models/listings");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    return res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    return res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    if (!listing.geometry || !listing.geometry.coordinates) {
        console.log("❌ NO GEOMETRY for listing:", listing.title);
    } else {
        console.log("✅ GEOMETRY OK:", listing.geometry.coordinates);
    }

    return res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    try {
        let response = await geocodingClient.forwardGeocode({
            query: `${req.body.listing.location}, ${req.body.listing.country}`,
            limit: 1,
        }).send();

        let url = req.file.path;
        let filename = req.file.filename;
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        newListing.geometry = response.body.features[0].geometry;

        let savedListing = await newListing.save();
        console.log("Saved geometry:", savedListing.geometry);

        req.flash("success", "Successfully created a new listing!");
        return res.redirect(`/listings/${newListing._id}`);
    } catch (err) {
        console.error("Create error:", err);
        req.flash("error", err.message);
        return res.redirect("/listings/new");
    }
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    return res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    try {
        let { id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

        if (typeof req.file !== "undefined") {
            listing.image = { url: req.file.path, filename: req.file.filename };
        }

        let response = await geocodingClient.forwardGeocode({
            query: `${req.body.listing.location}, ${req.body.listing.country}`,
            limit: 1,
        }).send();

        listing.geometry = response.body.features[0].geometry;
        console.log("Updated geometry:", listing.geometry);

        await listing.save();
        req.flash("success", "Listing Updated!");
        return res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error("Update error:", err);
        req.flash("error", err.message);
        return res.redirect(`/listings/${id}/edit`);
    }
};

module.exports.destroyListing = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        console.log(deletedListing);
        req.flash("success", "Listing Deleted!");
        return res.redirect("/listings");
    } catch (err) {
        console.error("Delete error:", err);
        req.flash("error", err.message);
        return res.redirect("/listings");
    }
};