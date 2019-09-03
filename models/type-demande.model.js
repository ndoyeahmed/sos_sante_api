module.exports = (sequelize, Sequelize) => {
    return sequelize.define("type_demandes", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelle: {
            type: Sequelize.STRING
        }
    });
};
