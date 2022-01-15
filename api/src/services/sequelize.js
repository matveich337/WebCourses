const { Sequelize } = require('sequelize');

const userModel = require('../models/users');
const roleModel = require('../models/roles');
const blogModel = require('../models/blogs');
const likeModel = require('../models/likes');
const commentModel = require('../models/comments');

const sequelize = new Sequelize('postgres://postgres:admin@127.0.0.1:5433/network');

const modelDefiners = [
  userModel,
  roleModel,
  blogModel,
  likeModel,
  commentModel,
];

function applyExtraSetup() {
  const {
    role, users, blog, like, comment,
  } = sequelize.models;

  users.hasOne(role, { as: 'role_idpk', foreignKey: 'role_id' });
  blog.hasOne(users, { as: 'user_idpk', foreignKey: 'user_id' });
  like.hasOne(users, { as: 'user_idpk', foreignKey: 'user_id' });
  like.hasOne(blog, { as: 'blog_idpk', foreignKey: 'blog_id' });
  comment.hasOne(users, { as: 'user_idpk', foreignKey: 'user_id' });
  comment.hasOne(blog, { as: 'blog_idpk', foreignKey: 'blog_id' });
}

/* eslint-disable-next-line */
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup();

module.exports = sequelize;
