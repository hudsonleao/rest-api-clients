const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');

module.exports = (app) => {

    app.get('/auth', async (req, res) => {
        try {
            const { user, password } = req.body;
            await usersModel.findOne({
                user,
                password
            })

            const token = jwt.sign({ empresa }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '24h' });
            res.status(200).json({ token: token });
        } catch (error) {

        }

    })

    app.use(async ({ req: { headers }, res }) => {
        try {
            const { user } = jwt.verify(headers.authorization, process.env.JWT_SECRET, { algorithm: 'HS256' });
            await usersModel.findOne({
                user
            })

            next();
        } catch (err) {
            res.status(401).json({
                messages: [{
                    message: 'Invalid token'
                }]
            });
        }
    });
}