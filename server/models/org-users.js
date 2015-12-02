module.exports = function(sequelize, DataTypes) {
    return sequelize.define('org_users', {
      role: {
        type: DataTypes.ENUM('owner', 'admin', 'user'),
        allowNull: false
      }
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
