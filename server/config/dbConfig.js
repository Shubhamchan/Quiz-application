require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

if(!mongoURI) {
    console.error("Mongo URI is missing. Please check your .env file.");
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));
