const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//animals route
ROUTER.get('/animals', (req, res) => {
  res.render('loveit/animals', {animals: ['cats','turtles']});
});
//foods route
ROUTER.get('/foods', (req, res) => {
  res.render('loveit/foods', {foods: ['watermelon','burgers', 'Rice Noodle']});
});

module.exports = ROUTER;