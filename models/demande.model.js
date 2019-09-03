module.exports = (sequelize, Sequelize) => {
    return sequelize.define("demandes", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titre: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING
        }
    });
};
