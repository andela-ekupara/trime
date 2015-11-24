module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projects', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },

    {
      // auto created column fields should use snake case
      underscored: true,
      // disable attempts to pluralize tablename
      freezeTableName: true,
      // add created_at and modified_at columns
      timestamps: true
    });
};
