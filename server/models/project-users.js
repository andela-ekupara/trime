module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project_users', {
      role: {
        type: DataTypes.ENUM('owner', 'admin', 'co-worker'),
        allowNull: false
      },
    },

    {
      // auto created column fields should use snake case
      underscore: true,
      // disable attempts to pluralize tablename
      freezeTableName: true,
      // add created_at and modified_at columns
      timestamps: true
    });
};
