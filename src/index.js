const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { engine } = require("express-handlebars");
const route = require("./routes");
const port = 3000;
const domain = "trang-the-gioi";

app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "sources/views"));

// app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTE INITIAL 
route(app)



app.listen(
  port,
  console.log(`this page will at address: http://localhost:${port}`)
);
