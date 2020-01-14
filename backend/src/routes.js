const {Router}= require('express');
const DevController= require('./controllers/DevControllers');
const SearchController= require('./controllers/SearchController');

const routes=  Router();

//Metodos HTTP: GET POST PUT DELETE
//Query Params:request.query    (Filtros,ordenacao,paginacao,...)
//Route Params: request.params  (Identificar recurso alteracao ou remocao)
//Body: request.body            (Criar/alterar registro)

routes.post('/devs',DevController.store);
routes.get('/devs',DevController.index);
routes.get('/search',SearchController.index);

module.exports= routes;