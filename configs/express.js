const express = require('express');
const consign = require('consign');
const cors = require('cors');
const mongoose = require('./mongoose');
const logger = require('./logger');

module.exports = () => {
    const app = express();
    app.logger = logger;
    mongoose();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(require('method-override')());
    app.use(cors());
    app.options('*', cors());
    app.use('/api/v1', app._router);

    consign({ cwd: 'src', verbose: false })
        .include('models')
        .then('repositories')
        .then('mappers')
        .then('services')
        .then('controllers')
        .then('middlewares')
        .then('routes')
        .into(app);

    return app;
};
