const EXPRESS = require('express');
const APP = EXPRESS();
const EJSlayout = require('express-ejs-layouts');


APP.set('view engine', 'ejs');

APP.use(EJSlayout);
APP.use('/loveit', require('./controllers/loveit'));
APP.use('/leaveit', require('./controllers/leaveit'));

//home route
APP.get('/', (req, res) => {
  res.render('home');
});

APP.listen(8000;