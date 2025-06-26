// Importing necessary modules and packages
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

// Setting up port number
const PORT = process.env.PORT || 4001;

// Middlewares
app.use(express.json());
// Loading environment variables from .env file
dotenv.config();
// route
const mailRoute = require("./routes/mail.js");
 
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

//mounting
app.use("/api/v1", mailRoute);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.
