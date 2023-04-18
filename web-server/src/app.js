const express = require("express");
const path = require("path");
const hbs = require("hbs");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Settup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Settup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew",
    foot: "Craeted By Node JS",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Andrew",
    foot: "Craeted By Node JS",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Andrew",
    foot: "Craeted By Node JS",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "you must provide address",
    });
  }
  forecast(-75.7088, 44.1545, (error, data) => {
    if (error) {
      return res.send({ error });
    }
    res.send({
      forecast: data,
      location: "Hassan Abdal",
      address: req.query.address,
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("helparticles", {
    title: "Help Articles",
    name: "Articles not found!",
    foot: "Craeted By Node JS",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 page",
    name: "404 page not found!",
    foot: "Craeted By Node JS",
  });
});

app.listen(5000, () => {
  console.log("server started at port 5000");
});
