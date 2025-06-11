const axios = require('axios');

module.exports = function(app) {
  app.get('/nsfw/anal', async (req, res) => {
    try {
      const response = await axios.get('https://api.nekorinn.my.id/nsfwhub/anal');
      res.status(200).json({
        status: true,
        creator: "RyuXChristian",
        result: response.data.result
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        creator: "RyuXChristian",
        message: error.message
      });
    }
  });
};