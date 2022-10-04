const User = require('../models/User');

class HomeController {
    index(req, res) {
        User.find({}, function (err, users) {
            if (err) {
                res.status(400).json({ message: 'Error!!' });
            } else {
                res.status(200).json(users);
            }
        });
    }
}

module.exports = new HomeController();
