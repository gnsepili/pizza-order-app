const MenuDB= require('../../models/menu');


function homeController() {
  return {
    async index(req, res) {
        const data=await MenuDB.find();
        res.render('home',{'pizzas':data});
        // console.log(data);
    }
  };
}

module.exports = homeController;
