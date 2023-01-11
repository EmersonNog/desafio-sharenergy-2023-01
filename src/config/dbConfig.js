import mongoose from "mongoose";
mongoose.set('strictQuery', false);


const dbConfig = 'mongodb+srv://usuario:senha@cluster0.vhcm3hj.mongodb.net/dados?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default connection;