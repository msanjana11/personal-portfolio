const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// ADD project
router.post("/add", async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.json(project);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;