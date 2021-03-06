const db = require("../config/db.config");
const Utilisateur = db.utilisateur;
const Roles = db.roles;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

exports.createUser = (req, res) => {
    Utilisateur.create({
        cin: req.body.cin,
        name: req.body.name,
        surname: req.body.surname,
        phoneNumber: req.body.phoneNumber,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then((user) => {
        Roles.findAll({where: {name: {[Op.or]: req.body.roles}}})
            .then((roles) => {
                user.setRoles(roles).then(() => {
                    res.send("User registered successfully!");
                });
            }).catch((err) => {
            res.status(500).send("Error -> " + err);
        });
    }).catch((err) => {
        res.status(500).send("Fail! Error -> " + err);
    });
};

exports.allUser = (req, res) => {
    Utilisateur.findAll().then((users) => {
        res.status(200).send(users);
    }).catch((err) => {
        res.status(500).send("Error -> " + err);
    });
};

exports.allRoles = (req, res) => {
    Roles.findAll().then((roles) => {
        if (roles && roles.length > 0) {
            res.status(200).send(roles);
        } else {
            initial();
            Roles.findAll().then((r) => {
                res.status(200).send(r);
            }).catch((error) => {
                res.status(500).send("Error -> " + error);
            });
        }

    }).catch((err) => {
        res.status(500).send("Error -> " + err);
    });
};

function initial() {
    Roles.create({
        id: 1,
        name: "ADMIN"
    });

    Roles.create({
        id: 2,
        name: "MEMBRE"
    });

    Roles.create({
        id: 3,
        name: "DONNEUR"
    });
}
