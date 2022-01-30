const newRouter = require("./news");
const economyRouter = require("./economy");

function route(app) {
  app.get(`/`, (req, res) => res.render("home"));

  //   app.get("/news", (req, res) => res.render("news"));
  app.use("/news", newRouter);

  app.use("/economy", economyRouter);

  app.get("/account", (req, res) => res.render("account"));

  app.get("/search", (req, res) => res.render("search"));

  app.post("/search", (req, res) => {
    res.send("TRANG XỬ LÝ DỮ LIỆU FORM");
  });
}
module.exports = route;
