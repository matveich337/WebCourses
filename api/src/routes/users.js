const { models } = require('../services/sequelize');

module.exports = function (app) {
  app.get('/users', async (req, res) => {

    const users = await models.users.findAll();

    if (users === null) {
      res.status(404).send();
    } else {
      res.status(200).send(users);
    }
  });

  app.get('/users/:id', async (req, res) => {
    const { id } = req.params;

    const user = await models.users.findByPk(id);

    if (user === null) {
      res.status(404).send();
    } else {
      res.status(200).send(user);
    }
  });

  app.post('/users', async (req, res) => {
    try {
      await models.users.create(req.body);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });

  app.put('/users/:id', async (req, res) => {
    try {
      await models.users.update(req.body, {
        where: {
          user_id: req.params.id,
        },
      });
      res.status(200).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });

  app.delete('/users/:id', async (req, res) => {
    try {
      await models.users.destroy({
        where: {
          user_id: req.params.id,
        },
      });
      res.status(204).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });
};
