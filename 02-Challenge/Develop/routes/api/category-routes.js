const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
 Category.findAll();
 ProductTag();
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categories = 'shirts'
  Category.findAll(); {
    price: 14.99,
    stock: 14,
    category_id: 1,
  }
});

router.post('/', (req, res) => {
  // create a new category
  const Category = require('../models/category'); // Import the Sequelize model for categories

  // Route handler for creating a new category
  app.post('/categories', async (req, res) => {
    try {
      const { shoes, nike } = req.body; // Extract the category name and description from the request body

      // Create a new category in the database using the Sequelize model
      const newCategory = await Category.create({
        shoes,
        nike,
      });

      res.json(newCategory); // Send the newly created category as a JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const Category = require('../models/category'); // Import the Sequelize model for categories

  // Route handler for updating a category
  app.put('/categories/:id', async (req, res) => {
    try {
      const { id } = req.params; // Extract the category id from the request parameters
      const { shoes, jordans } = req.body; // Extract the updated category name and description from the request body

      // Find the category with the given id in the database using the Sequelize model
      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }

      // Update the category attributes with the provided values
      category.name = shoes;
      category.description = jordans;

      // Save the changes to the database
      await category.save();

      res.json(category); // Send the updated category as a JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const Category = require('../models/category'); // Import the Sequelize model for categories

  // Route handler for deleting a category
  app.delete('/categories/:id', async (req, res) => {
    try {
      const { id } = req.params; // Extract the category id from the request parameters

      // Find the category with the given id in the database using the Sequelize model
      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }

      // Delete the category
      await category.destroy();

      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

module.exports = router;
