const express = require("express");
const exhbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));

app.set("view engine", "hbs");

app.engine(
  "hbs",
  exhbs({
    extname: "hbs",
  })
);

app.get("/", (req, res) => {
  //   console.log('Это колбек для app.get("/")');
  //   console.log(req.url);
  //   res.send({ name: "andrew" });
  res.render("home");
});

app.get("/about", (req, res) => {
  //   console.log('Это колбек для app.get("/about")');
  //     console.log(req.url);
  res.render("about");
});

app.get("/products", (req, res) => {
  res.render("products");
});

app.listen(4444, () => {
  console.log("App server is running on port ${4444}");
});
