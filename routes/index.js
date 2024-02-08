var express = require("express");
var User = require("../models/user");
var perf = require("execution-time-async")();
var router = express.Router();
perf.config();

/* GET home page . */
router.get("/", ensureAuthenticated, function (req, res, next) {
  console.log(`res.locals: ${JSON.stringify(res.locals)}`);
  res.render("index", { title: "Members" });
});
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    User.getAllUsers(function (data) {
      res.locals.users = data;
      return next();
    });
  } else {
    res.redirect("/users/login");
  }
}
module.exports = router;
