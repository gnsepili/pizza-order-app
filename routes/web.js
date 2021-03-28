const homeController=require('../app/http/controls/homeController');
const authController=require('../app/http/controls/authController');
const cartController = require('../app/http/controls/customers/cartController');



function initRoutes(app){    
    app.get('/',homeController().index);
    app.get('/cart',cartController().index);
    app.get('/login',authController().login);
    app.get('/register',authController().register);
}











module.exports = initRoutes