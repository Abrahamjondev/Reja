console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1 KIRISH CODES
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session CODES

//3 VIEWS CODES
app.set("views", "views");
app.set("view engine", "ejs");

//4 ROUTING CODES
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json ({ test: "success" });
  // Ma'lumotlarni qabul qilish
});
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server is running successfully on port: ${PORT}`);
});
