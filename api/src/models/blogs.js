const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'blog',
    {
      blog_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      blog_text: {
        type: DataTypes.TEXT,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      user_id: {
        type: DataTypes.NUMBER,
      },
    },
    {
      modelName: 'Blog',
      tableName: 'blogs',
      createdAt: false,
      updatedAt: false,
    },
  );
};
