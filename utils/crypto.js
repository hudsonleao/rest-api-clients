const crypto = require('crypto');

module.exports = {
    createHash: async (password) => {
        try {
            return crypto.createHash('md5').update(password).digest("hex");
        } catch (error) {

        }
    },
}
