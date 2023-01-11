import express from "express";
import DadosController from "./controllers/DadosController.js";

const routes = express.Router();

// rota Dados
routes.post('/dados', DadosController.create);
routes.get('/dados', DadosController.read);
routes.delete('/dados/:id', DadosController.delete);
routes.put('/dados/:_id', DadosController.update);

export default routes;