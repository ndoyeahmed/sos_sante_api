module.exports = (sequelize, Sequelize) => {
    return sequelize.define("utilisateur", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cin: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        }

    })
};
