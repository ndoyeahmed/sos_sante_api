// change this require to env-dev in local : const env = require('./env-dev');
// change this require to env-prod in production : const env = require('./env-prod');
const env = require('./env-dev');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.utilisateur = require('../models/user.model')(sequelize, Sequelize);
db.roles = require('../models/role.model')(sequelize, Sequelize);
db.demandes = require('../models/demande.model')(sequelize, Sequelize);
db.typeDemande = require('../models/type-demande.model')(sequelize, Sequelize);

db.roles.belongsToMany(db.utilisateur, {through: 'utilisateur_roles', foreignKey: 'rolesId', otherKey: 'utilisateurId'});
db.utilisateur.belongsToMany(db.roles, {through: 'utilisateur_roles', foreignKey: 'utilisateurId', otherKey: 'rolesId'});
db.demandes.belongsTo(db.utilisateur, {onUpdate: 'CASCADE', onDelete: 'CASCADE'});
db.demandes.belongsTo(db.typeDemande);

module.exports = db;
