module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projects', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },

    {
      // Auto created column fields should use snake case
      underscored: true,
      // Disable attempts to pluralize tablename
      freezeTableName: true,
      // Add created_at and modified_at columns
      timestamps: true
    });
};
