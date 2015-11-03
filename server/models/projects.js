var Sequelize = require('sequelize'),
	db = require('../config/db_connect)'),
	Projects = db.define('projects', {
		//primary key
		
		title: {
			type: Sequelize.STRING,
			allowNull: false
		},

		description: {
			type: Sequelize.STRING,
			allowNull: true
		}

		// foreign key
	});