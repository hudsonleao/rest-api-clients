const express = require('express');
const consign = require('consign');
const cors = require('cors');
const mongoose = require('./mongoose');
const jwt = require('../src/middlewares/jwt');

module.exports = () => {
    const app = express();
    mongoose();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(require('method-override')());
    app.use(cors());
    app.options('*', cors());
    app.use('/api/v1', app._router);
    app.use(jwt);

    consign({ cwd: 'src', verbose: false })
        .include('models')
        .then('controllers')
        .then('middlewares')
        .then('routes')
        .into(app);

    return app;
};
