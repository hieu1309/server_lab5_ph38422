const mongoose = require('mongoose');

const local = "mongodb+srv://hieu1:P2ixyxnCaLrLrnQz@cluster0.u0yiljo.mongodb.net/md18305";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
