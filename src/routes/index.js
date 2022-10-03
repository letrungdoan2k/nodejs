const newsRoute = require('./news');

function routers(app) {
    app.use('/', newsRoute);
}

module.exports = routers;
