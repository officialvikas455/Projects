if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
} // remove this after you've confirmed it is working

const express = require("express");
const app = express();
process.on('uncaughtException', (err) => {
  console.log("UNCAUGHT EXCEPTION:", err.message);
  console.log(err.stack);
});
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo")
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl = process.env.ATLASDB_URL;
main()
.then(()=>{
  console.log("connected to DB");
})
.catch((err)=>{
  console.log(err);
});

async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
});

store.on("error", (err) => {
  console.log("ERROR in Mongo Store", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET || "fallbacksecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true
  },
};
app.use(session(sessionOptions));
app.use(flash());

// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
//   });

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});


// app.get("/demouser", async(req, res) =>{
//   let fakeUser = new User({
//     email : "student@gmail.com",
//     username : "delta-student"
//   });
//  let  registeredUser = await User.register(fakeUser, "helloworld");
//  res.send(registeredUser);
//
// });
   
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";
  
  // Replace err with a safe object so template never crashes
  return res.status(statusCode).render("listings/error.ejs", { 
    err: { statusCode, message } 
  });
});

app.use((err, req, res, next) => {
  console.log("=== ERROR HANDLER ===");
  console.log("URL:", req.originalUrl);
  console.log("Headers sent?", res.headersSent);
  console.log("Error:", err.message);
  
  if (res.headersSent) {
    return next(err); // ← add this safety check
  }
  
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";
  return res.status(statusCode).render("listings/error.ejs", { 
    err: { statusCode, message } 
  });
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});