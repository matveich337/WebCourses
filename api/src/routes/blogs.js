const { models } = require('../services/sequelize');

module.exports = function (app) {
  app.get('/blogs/:id', async (req, res) => {
    const { id } = req.params;

    const blog = await models.blog.findByPk(id);

    if (blog === null) {
      res.status(404).send();
    } else {
      res.status(200).send(blog);
    }
  });

  app.post('/blogs', async (req, res) => {
    try {
      await models.blog.create(req.body);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });

  app.put('/blogs/:id', async (req, res) => {
    try {
      await models.blog.update(req.body, {
        where: {
          blog_id: req.params.id,
        },
      });
      res.status(200).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });

  app.delete('/blogs/:id', async (req, res) => {
    try {
      await models.blog.destroy({
        where: {
          blog_id: req.params.id,
        },
      });
      res.status(204).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });
};
