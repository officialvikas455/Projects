const Listing = require("../models/listings");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  try {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created!");
    return res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.error("Create review error:", err);
    req.flash("error", err.message);
    return res.redirect(`/listings/${req.params.id}`);
  }
};

module.exports.destroyReview = async (req, res) => {
  try {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    return res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error("Delete review error:", err);
    req.flash("error", err.message);
    return res.redirect(`/listings/${req.params.id}`);
  }
};