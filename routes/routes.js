const userController = require("../controller/user.controller");
const notifController = require('../controller/notificationController');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");
const api = "/api";

module.exports = function (app) {

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.route(api + "/users")
        .get(userController.allUser)
        .post(userController.createUser);

    app.get(api + "/users/{id}");

    app.post(api + "/signin");

    app.get(api + "/roles", userController.allRoles);

    app.post(api + "/notification", notifController.notif)
};
