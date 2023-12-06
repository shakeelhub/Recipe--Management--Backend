const mongoose = require("mongoose");

URI = "mongodb+srv://shakeelbinshahul:shamoshamo123@cluster0.arxetza.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });