let moment = require("moment");

module.exports = function(app) {
  app.get("/", (req, resp) => resp.render("index"));
};
