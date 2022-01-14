const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'comment',
    {
      comment_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      comment_text: {
        type: DataTypes.TEXT,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      comment_parent_id: {
        type: DataTypes.NUMBER,
      },
      user_id: {
        type: DataTypes.NUMBER,
      },
      blog_id: {
        type: DataTypes.NUMBER,
      },
    },
    {
      modelName: 'Comment',
      tableName: 'comments',
      createdAt: false,
      updatedAt: false,
    },
  );
};
