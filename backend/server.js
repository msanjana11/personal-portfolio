const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const projectRoutes = require("./routes/projectRoutes");

// MongoDB Connection
mongoose.connect("mongodb+srv://sanjana:sanjana123@cluster0.4fusx36.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log(error);
});

// Route
app.get("/", (req, res) => {
    res.send("Backend Server Running");
});

// Server start
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
app.use("/api/projects", projectRoutes);