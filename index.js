const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();

const PORT = 3002;

app.use(express.json());
app.use(cors());

const config = require("./db/config");
const Home = require("./controllers/controller");
const LoginRoute = require("./routes/LoginRoute");
const RegisterRoute = require("./routes/RegisterRoute");
const RecipeRoute = require("./routes/RecipeRoute");
const ForgotPassword = require("./routes/forgotPassword");

app.use("/auth", LoginRoute);
app.use("/auth", RegisterRoute);
app.use("/auth", RecipeRoute);
app.use("/auth", router);
app.use("/auth", ForgotPassword);

// Move this handler inside the app instance
app.get("/", (req, res) => {
    res.send("Hello, Welcome to my Recipe Management App!");
});

if (config) {
    app.listen(PORT, () => {
        console.log(`Server Started on port ${PORT}`);
    });
}
