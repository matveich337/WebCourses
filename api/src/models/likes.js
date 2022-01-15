const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'like',
    {
      like_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      blog_id: {
        type: DataTypes.NUMBER,
      },
      user_id: {
        type: DataTypes.NUMBER,
      },
    },
    {
      modelName: 'Like',
      tableName: 'likes',
      createdAt: false,
      updatedAt: false,
    },
  );
};
