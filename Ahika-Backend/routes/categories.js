const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    try {
        const categoryList = await Category.find();

        if (!categoryList) {
            return res.status(500).json({ success: false });
        }

        res.status(200).send(categoryList);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(500).json({ message: 'The category with the given ID was not found.' });
        }

        res.status(200).send(category);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        let category = new Category({
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color
        });
        category = await category.save();

        if (!category) {
            return res.status(400).send('The category cannot be created!');
        }

        res.send(category);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                icon: req.body.icon || category.icon,
                color: req.body.color,
            },
            { new: true }
        );

        if (!category) {
            return res.status(400).send('The category cannot be updated!');
        }

        res.send(category);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndRemove(req.params.id);

        if (deletedCategory) {
            return res.status(200).json({ success: true, message: 'The category is deleted!' });
        } else {
            return res.status(404).json({ success: false, message: "Category not found!" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
