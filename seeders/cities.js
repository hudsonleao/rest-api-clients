const mongoose = require("../configs/mongoose");
const citiesModel = require("../src/models/citiesModel")();
const fs = require('fs/promises');

; (async () => {

    mongoose();

    console.log('\nInitializing the insertion of cities and states, please wait...');

    const { states } = JSON.parse(await fs.readFile('./migrations/citiesBrazil.json', 'utf-8'));

    for await (const state of states) {
        for await (const citie of state.cities) {
            await citiesModel.create({
                created_by: "system",
                updated_by: "system",
                name: citie,
                state: state.name,
            });
        }
    }

    console.log('\nAll cities have been successfully registered');
    process.exit();

})();