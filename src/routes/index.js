const newsRoute = require('./news');
const homeRoute = require('./home');

function routers(app) {
    app.use('/news', newsRoute);

    app.use('/', homeRoute);
}

module.exports = routers;
