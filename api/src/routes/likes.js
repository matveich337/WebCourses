const { models } = require('../services/sequelize');

module.exports = function (app) {
  app.get('/likes/:id', async (req, res) => {
    const { id } = req.params;

    const like = await models.like.findByPk(id);

    if (like === null) {
      res.status(404).send();
    } else {
      res.status(200).send(like);
    }
  });

  app.get('/all-likes/:id', async (req, res) => {
    const { id } = req.params;

    const likes = await models.like.findAll({
      where: {
        user_id: id,
      },
    });

    if (likes === null) {
      res.status(404).send();
    } else {
      res.status(200).send(likes);
    }
  });

  app.post('/likes', async (req, res) => {
    try {
      await models.like.create(req.body);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });

  app.put('/likes/:id', async (req, res) => {
    try {
      await models.like.update(req.body, {
        where: {
          like_id: req.params.id,
        },
      });
      res.status(200).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });

  app.delete('/likes/:id', async (req, res) => {
    try {
      await models.like.destroy({
        where: {
          like_id: req.params.id,
        },
      });
      res.status(204).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });
};
