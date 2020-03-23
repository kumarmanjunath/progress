const express = require("express");
const auth = require("../middleware/auth");
const routes = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/Users");
const Contact = require("../models/Contact");

routes.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//post

routes.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(er.message);
      res.status(500).send("server error");
    }
  }
);

//DELETE

routes.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "not found" });

    //make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: "contact removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
module.exports = routes;
