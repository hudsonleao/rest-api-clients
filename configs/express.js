const express = require('express');
const consign = require('consign');
const jwt = require('jsonwebtoken');
const cors = require('cors');

module.exports = () => {
    const app = express();
    app.mongoose = require('./mongoose')();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(require('method-override')());
    app.use(cors());
    app.options('*', cors());
    app.use('/api/v1', app._router);

    consign({ cwd: 'src', verbose: false })
        .include('models')
        .then('controllers')
        .then('routes')
        .then('middlewares')
        .into(app);

    return app;
};
