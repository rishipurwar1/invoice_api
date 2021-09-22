const path = require("path");
const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

// routes
const invoices = require("./routes/api/invoices");

// Init Middleware
app.use(express.json({ extended: false }));
var corsOptions = {
  origin: "https://invoicesapi.herokuapp.com",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Connect Database
connectDB();

app.get("/api", (req, res) => {
  res.render("index");
});

app.use("/api", invoices);

app.listen(port, () => {
  console.log("Server is started");
});
