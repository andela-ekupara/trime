module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        firstname: {
          type: DataTypes.STRING
        },
        lastname: {
          type: DataTypes.STRING
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        github_auth_id: {
          type: DataTypes.STRING,
          allowNull: true
        },
        github_auth_token: {
          type: DataTypes.STRING,
          allowNull: true
        },
        google_auth_id: {
          type: DataTypes.STRING,
          allowNull: true
        },
        google_auth_token: {
          type: DataTypes.STRING,
          allowNull: true
        },
        password: {
          type: DataTypes.STRING,
          comment: 'Should be hashed'
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
