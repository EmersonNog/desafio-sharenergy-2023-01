import mongoose from "mongoose";

const DadosSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    endereco: String,
    cpf: String,
});

export default mongoose.model('dados', DadosSchema);