import Dados from "../models/Dados.js";

export default {

    async read(req, res) {
        const listaDados = await Dados.find();
        return res.json(listaDados)
    },

    async create(req, res) {
        const { nome, email, telefone, endereco, cpf } = req.body;

        if(!cpf) {
            return res.status(400).json({
                error: "Necessário um CPF!"
            });
        }

        const criarDados = await Dados.create({
            nome,
            email,
            telefone,
            endereco,
            cpf,
        });
        
        return res.json(criarDados);
    },
    
    async delete(req, res) {
        const { id } = req.params;
        const deletarDados = await Dados.findOneAndDelete({ _id: id });
        
        if(deletarDados) {
            return res.json('Cadastro do ' + deletarDados.nome + ' foi excluído com sucesso!');
        }

        return res.status(401).json({ error: 'Não foi encontrado o registro para deletar!' });
    },

    async update(req, res) {
        const { _id } = req.params;
        const { nome, email, telefone, endereco, cpf} = req.body;
        const data = {nome, email, telefone, endereco, cpf};
        const user = await Dados.findByIdAndUpdate({_id}, data, {new: true});
        res.json(user);
        }
}