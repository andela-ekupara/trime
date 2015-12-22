module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org-users', {
      role: {
        type: DataTypes.ENUM('owner', 'admin', 'user'),
        allowNull: false
      }
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
