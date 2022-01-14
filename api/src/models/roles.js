const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'role',
    {
      role_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      role_name: {
        type: DataTypes.TEXT,
      },
    },
    {
      modelName: 'Role',
      tableName: 'roles',
      createdAt: false,
      updatedAt: false,
    },
  );
};
