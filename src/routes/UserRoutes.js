const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");

// post
router.post("/create", async (req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });

    try {
        const userDataToSave = await user.save();
        res.status(200).json(userDataToSave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// getAll
router.get("/getAll", async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// getById
router.get("/getOne/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// updateById
router.patch("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const options = {new: true};

        const result = await User.findByIdAndUpdate(id, data, options);

        res.send(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// deleteById
router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);

        res.send(`Document with ${user.name} has been deleted..`);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;
