const express = require("express"); // Import the express library
const cors = require("cors"); // Import the cors library for handling Cross-Origin Resource Sharing
require("dotenv").config(); // Load environment variables from a .env file
const translatorRouter = require("./routes/TranslatorRoutes"); // Import the translator router

const app = express(); // Create an Express application
const PORT = process.env.PORT || 8080; // Set the port from environment variable or default to 8080

app.use(express.json()); // Use middleware to parse JSON request bodies
app.use(cors()); // Use middleware to enable CORS
app.use("/translator", translatorRouter); // Use the translator router for routes starting with /translator
app.get('/',(req,res)=>{
    res.send("welcome to backend of text translator")
})

// Start the server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`); // Log the server URL
});
