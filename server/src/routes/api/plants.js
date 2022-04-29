// routes/api/plants.js
const express = require('express');
const router = express.Router();

// Load Plant model
const Plant = require('../../models/Plant');

// @route GET api/plants/test
// @description tests plants route
// @access Public
router.get('/test', (req, res) => res.send('plant route testing!'));

// @route GET api/plants
// @description Get all plants
// @access Public
router.get('/', (req, res) => {
    Plant.find()
        .then(plants => res.json(plants))
        .catch(err => res.status(404).json({ noplantfound: 'No Plants found' }));
});

// @route GET api/plants/:id
// @description Get single plant by id
// @access Public
router.get('/:id', (req, res) => {
    Plant.findById(req.params.id)
        .then(plant => res.json(plant))
        .catch(err => res.status(404).json({ noplantfound: 'No Plant found' }));
});

// @route GET api/plants
// @description add/save plant
// @access Public
router.post('/', (req, res) => {
    Plant.create(req.body)
        .then(plant => res.json({ msg: 'Plant added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this plant' }));
});

// @route GET api/plants/:id
// @description Update plant
// @access Public
router.put('/:id', (req, res) => {
    Plant.findByIdAndUpdate(req.params.id, req.body)
        .then(plant => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/plants/:id
// @description Delete plant by id
// @access Public
router.delete('/:id', (req, res) => {
    Plant.findByIdAndRemove(req.params.id, req.body)
        .then(plant => res.json({ mgs: 'Plant entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a plant' }));
});

module.exports = router;