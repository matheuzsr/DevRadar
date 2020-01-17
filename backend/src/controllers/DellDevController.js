const Dev = require('../models/Dev');
const DevController= require('./controllers/DevControllers');
const SearchController= require('./controllers/SearchController');

//index, show, store, update, destroy

module.exports = {
  async destroy(request, response) {
 
      //delete todos os devs
      const Devss= DevController.SearchController;
      Dev.removeAllListeners()
      message = resp ? "Base deletada" : "Nenhum usuario base";
    return response.json({ message, resp });

  },
}