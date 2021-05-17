const mongoose = require("../configs/mongoose");
const usersModel = require("../src/models/usersModel")();

; (async () => {

    mongoose();

    await usersModel.create({
        created_by: "system",
        updated_by: "system",
        name: "Administrador",
        user: "admin",
        // password = gd2D2@cjwcvneSMs2Sc_ew
        password: "e025931cd226c575196f9a9f76de0125",
    });

    console.log('\nUser created successfully');
    process.exit();

})();