const { models } = require('../services/sequelize');

module.exports = function (app) {
  app.get('/comments/:id', async (req, res) => {
    const { id } = req.params;

    const comment = await models.comment.findByPk(id);

    if (comment === null) {
      res.status(404).send();
    } else {
      res.status(200).send(comment);
    }
  });

  app.get('/comments-blog/:id', async (req, res) => {
    const { id } = req.params;

    const comments = await models.comment.findAll({
      where: {
        blog_id: id,
      },
    });

    if (comments === null) {
      res.status(404).send();
    } else {
      res.status(200).send(comments);
    }
  });

  app.get('/my-comments/:id', async (req, res) => {
    const { id } = req.params;

    const comments = await models.comment.findAll({
      where: {
        user_id: id,
      },
    });
    
    if (comments === null) {
      res.status(404).send();
    } else {
      res.status(200).send(comments);
    }
  });

  app.post('/comments', async (req, res) => {
    try {
      await models.comment.create(req.body);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });

  app.put('/comments/:id', async (req, res) => {
    try {
      await models.comment.update(req.body, {
        where: {
          comment_id: req.params.id,
        },
      });
      res.status(200).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });

  app.delete('/comments/:id', async (req, res) => {
    try {
      await models.comment.destroy({
        where: {
          comment_id: req.params.id,
        },
      });
      res.status(204).end();
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: 'bad request' });
    }
  });
};
