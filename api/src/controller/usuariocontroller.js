import { login } from '../repository/usuariorepository.js';





import { Router } from "express";
const server = Router ();


server.post('/usuario./login', (req, resp ) => {
     try {
        const {email, senha } = req.body:
        const resposta =  await login (email, senha);
     }  catch(err ) {
        resp.status(400).send({
            erro: 'ocorreu um erro'
        })
     }


})

import default server;