const FCM = require('fcm-node');

exports.notif = (req, res) => {
    let fcm = new FCM('AAAAz8MKqP8:APA91bGZjDXBaF5kIt1zgDx9r75e1f6-C3X0i2Td0nDu-N2UseWNALtOJt_USRYck4uS_oyB_2KQWhabdbRnAPQQ28Qow4trdf0KLSiod4YRShg55I7Msu60HxGh8eUSisTY96e7K9mr');

    let message = {
        to: req.body.device,
        notification: {
            title: req.body.title,
            body: req.body.body
        },
        data: {"click_action": "FLUTTER_NOTIFICATION_CLICK", "id": "1", "status": "done"}
    }
    fcm.send(message, function (err, response) {
        if (err) {
            console.log("Something went wrong " + err);
            res.status(500).send("Error -> " + err);
        } else {
            res.status(200).send("success -> " + response);
            console.log("successfully sent with response " + response);
        }
    })
};
