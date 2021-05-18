module.exports = () => {
    const swaggerAutogen = require('swagger-autogen')();

    const doc = {
        swagger: "2.0",
        info: {
            title: 'Test Compasso REST API',
            description: 'API',
        },
        host: 'localhost:3000/api/v1',
        schemes: ['http'],
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'authorization'
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    };

    const outputFile = './swagger-output.json';
    const endpointsFiles = ['./src/routes/authRoute.js', './src/routes/citiesRoute.js', './src/routes/clientsRoute.js', './src/routes/usersRoute.js'];

    swaggerAutogen(outputFile, endpointsFiles, doc);
}