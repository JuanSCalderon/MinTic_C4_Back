const mongoose = require("mongoose");

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb+srv://grupo5:gmTDWOAOByN4MFUx@cluster0.9y1gkde.mongodb.net/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conectado en :${url}`);
    } catch (error) {
        console.log(`error:${error.message}`);
        process.exit(1);
    }
};
module.exports = conectarDB;