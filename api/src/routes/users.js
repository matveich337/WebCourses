const { models } = require('../services/sequelize');
const { unlink } = require('fs');

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

  app.get('/user-avatar/:id', async (req, res) => {
    const { id } = req.params;
    const user = await models.users.findByPk(id);

    if (user === null) {
      res.status(404).send();
    } else {
      const currentImage = user.dataValues.profile_image;
      if (currentImage) {
        res.status(200).send({profile_image: req.headers.host + currentImage});
      } else {
        res.status(400).send({ message: 'bad request' });
      }
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

  app.post('/user-avatar/:id', async function (req, res, next) {
    let filedata = req.file;
  
    if (!filedata) {
      return res.status(400).send({ message: 'bad request' });
    } else {
      const user = await models.users.findByPk(req.params.id);
      const currentImage = user.dataValues.profile_image;
  
      if (currentImage) {
        await unlink('./' + currentImage, (err) => {
          if (err) throw err;
        });
      }
  
      await models.users.update({ profile_image: "/media/" + req.file.filename }, { where: { user_id: req.params.id } }).then(function () {
        return res.status(200).end();
      })
    }
  })

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
