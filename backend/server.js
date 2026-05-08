const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());
const projectRoutes = require("./routes/projectRoutes");

// MongoDB Connection
//mongoose.connect("mongodb+srv://sanjana:sanjana123@cluster0.4fusx36.mongodb.net/?appName=Cluster0")
mongoose.connect(process.env.MONGO_URI)
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


app.use("/api/projects", projectRoutes);
app.get("/test", (req, res) => {
    res.json({
        message: "API working"
    });
});
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
