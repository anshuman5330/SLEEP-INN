const PORT = 2200;
const express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    path = require('path');
    

//requiring models
const Campground  = require("./models/campground");
const Comment     = require("./models/comment");
const User        = require("./models/user");
const seedDB      = require("./seeds");




//requiring routes
const commentRoutes    = require("./routes/comments");
const campgroundRoutes = require("./routes/campgrounds");
const indexRoutes      = require("./routes/index");
 

const url = 'mongodb://127.0.0.1/likedb';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Database connected");
  }).catch(error => {
    console.log("MongoDB connection error:", error);
  });



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database



// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});



//using all get post request
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);




app.listen(process.env.PORT || PORT, process.env.IP, function() {
    console.log(`The Yelp camp server has started on port ${PORT}`);
  });