const swaggerAutogen = require('swagger-autogen')()

module.exports = () => {
    const doc = {
        info: {
            title: "Teste Compasso REST API",
            description: "Teste API"
        },
        host: "localhost:3000",
        schemes: ['http']
    }

    const outputFile = '../swagger-documentation.json'
    const endpointsFiles = ['../src/routes/*.js']

    swaggerAutogen(outputFile, endpointsFiles, doc)
}