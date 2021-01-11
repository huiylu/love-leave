const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//movies route
ROUTER.get('/movies', (req, res) => {
  res.render('leaveit/movie', {movies: ['forrest gump',  'The Room']});
});
//products route
ROUTER.get('/products', (req, res) => {
  res.render('leaveit/product', {products: ['single ply toilet paper', 'shitty paper towels']});
});

module.exports = ROUTER;