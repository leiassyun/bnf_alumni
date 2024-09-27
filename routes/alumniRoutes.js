// routes/alumniRoutes.js
const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');

// Read - Get all alumni
router.get('/', async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.render('index', { alumni });
  } catch (error) {
    res.status(500).send('Error fetching alumni data: ' + error.message);
  }
});

// Create - Show form to add a new alumnus
router.get('/add', (req, res) => {
  res.render('add');
});

// Create - Add a new alumnus
router.post('/add', async (req, res) => {
  const { name, phoneNumber } = req.body;
  try {
    await Alumni.create({ name, phoneNumber });
    res.redirect('/');
  } catch (error) {
    res.status(400).send('Error adding alumnus: ' + error.message);
  }
});

// Update - Show form to edit an alumnus
router.get('/edit/:id', async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);
    res.render('edit', { alumni });
  } catch (error) {
    res.status(404).send('Alumnus not found: ' + error.message);
  }
});

// Update - Edit an existing alumnus
router.post('/edit/:id', async (req, res) => {
  const { name, phoneNumber } = req.body;
  try {
    await Alumni.findByIdAndUpdate(req.params.id, { name, phoneNumber });
    res.redirect('/');
  } catch (error) {
    res.status(400).send('Error updating alumnus: ' + error.message);
  }
});

// Delete - Remove an alumnus
router.post('/delete/:id', async (req, res) => {
    try {
      await Alumni.findByIdAndDelete(req.params.id); // Updated method
      res.redirect('/');
    } catch (error) {
      res.status(400).send('Error deleting alumnus: ' + error.message);
    }
  });

module.exports = router;
