const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections } = require('../websocket');
//index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {

      const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]

      }

      //Cadastro banco
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });

      //Filtrar as connections
      //que estao a no máximo 50km e que possuem a tech
      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      )

      console.log(sendSocketMessageTo);
    }
    return response.json(dev);
  },

  async destroy(request, response) {
    const { github_username } = request.query;

    //procure e delete
    let dev = await Dev.findOneAndDelete({ github_username });
    const message = dev ? "Delete Usuário deletado" : "Usuário não encontrado";

    return response.json({ message, dev });
  },

};


