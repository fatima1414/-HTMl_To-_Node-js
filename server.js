const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

const { services, gallery, servicePageData } = require("./views/layout/data");

app.get("/", (req, res) => {
  res.render("pages/index", { title: "home", services });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "about" });
});

app.get("/services", (req, res) => {
  res.render("pages/services", { title: "services", servicePageData });
});
app.get("/gallery", (req, res) => {
  res.render("pages/gallery", { title: "gallery", gallery });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "contact" });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
