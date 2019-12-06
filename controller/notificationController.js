const FCM = require('fcm-node');

exports.notif = (req, res) => {
    let fcm = new FCM('AAAAt49xgek:APA91bGFZUVRs9iPWUigQc3OS9Fx2hCR7ZRVC9SC4C3YybMzOJGU9Qg_Xd1Fhr1iTab7dOAz7Fk9BDiFj3DIcuo2tfe0-c88QjUk5gxJhL-bqd45xRZnCDINrhIo1uUZNQnWXHazbtIv');

    let message = {
        to: req.body.device,
        notification: {
            title: req.body.title,
            body: req.body.body,
            sound: "default",
            click_action: "FCM_PLUGIN_ACTIVITY",
            icon: "fcm_push_icon"
        },
        data: { "click_action": "FLUTTER_NOTIFICATION_CLICK", "id": "1", "status": "done" }
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
