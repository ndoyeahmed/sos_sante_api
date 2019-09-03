const userController = require("../controller/user.controller");
const api = "/api";

module.exports = function (app) {

    app.get(api + "/users", userController.allUser);

    app.post(api + "/users", userController.createUser);

    app.get(api + "/users/{id}");

    app.post(api + "/signin");

    app.get(api + "/roles", userController.allRoles);
};
