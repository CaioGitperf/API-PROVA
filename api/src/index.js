import 'dotenv/config'


import usuarioController from './controller/usuariocontroller';

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());


//configuração dos ends
server.use(usuarioController);




server.listen(process.env.PORT, () => console.log(`API conectado na porta ${process.env.PORT}`))