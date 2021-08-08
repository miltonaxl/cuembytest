import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import './config/enviroments';



import _routes from './routes';

dotenv.config({path: './src/.env'});

import './db/connectionMongo';


//Initializer
const app = express();



//middleware
app
    .use(cors())
    .use(express.json())
    .use(morgan('dev'))

//routes 
    .use('/api/v1',_routes)

export default app;