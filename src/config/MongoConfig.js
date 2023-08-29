const mongoose = require('mongoose');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE} = process.env;

exports.connect = () => {
    mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`)
        .then(console.log("DB Connection Successfull"))
        .catch((e) => {
            console.error('DB Connection Failed');
            console.error(e);
        });
};