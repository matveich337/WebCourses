const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'users',
    {
      user_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      email: {
        type: DataTypes.TEXT,
      },
      first_name: {
        type: DataTypes.TEXT,
      },
      last_name: {
        type: DataTypes.TEXT,
      },
      birth: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      phone_number: {
        type: DataTypes.TEXT,
      },
      university: {
        type: DataTypes.TEXT,
      },
      role_id: {
        type: DataTypes.NUMBER,
      },
      password: {
        type: DataTypes.TEXT,
      },
    },
    {
      modelName: 'User',
      tableName: 'users',
      createdAt: false,
      updatedAt: false,
    },
  );
};
