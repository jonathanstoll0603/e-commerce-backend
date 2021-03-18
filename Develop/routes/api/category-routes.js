const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // Finds and includes 'Categories' associated products
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(
      req.params.id, {
        include: [{ model: Product }]
    });
    // if no category id is found, give error status 400, else send data to client
    if (!categoryData) {
      res.status(400).json({ message: 'Category Not Found!' });
      return;
    };
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

// FIX PUT ROUTE
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update({
      where: {
        id: req.params.id 
      }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(400).json({ message: 'Category Not Found!' });
      return;
    };
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
