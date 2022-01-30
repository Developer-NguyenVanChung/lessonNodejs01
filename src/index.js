const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;
const domain = "trang-the-gioi";

app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "sources/views"));

app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(`/`, (req, res) => {
  console.log(req.query);
  res.render("home");
});

app.get("/news", function showNews(req, res) {
  return res.render("news");
});

app.get("/account", (req, res) => res.render("account"));
app.get("/search", (req, res) => res.render("search"));

app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("TRANG XỬ LÝ DỮ LIỆU FORM");
});

app.listen(
  port,
  console.log(`this page will at address: http://localhost:${port}`)
);
