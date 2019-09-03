const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

require("./routes/routes")(app);

const db = require("./config/db.config");
const Roles = db.roles;

function initial() {
    if (!Roles.findAll()) {
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
}

db.sequelize.sync({force: false}).then(() => {
    initial();
});

let server = app.listen(8000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("app is listening at http://%s:%s", host, port);
});
