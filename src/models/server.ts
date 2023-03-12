import express, { Application } from 'express';
import { config } from '../config/env.local';

import userRoutes from '../routes/user';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import { dbConnection } from '../db/conn';

class Server {
    public app: Application;
    public port: number | string;

    constructor() {
        this.port = config.port;
        this.app = express();
        this.middlewares();
        this.database();
        this.routes();

    }

    routes() {
        this.app.use(userRoutes);
    }

    middlewares() {
        this.app.use(helmet());
        this.app.use(cors())
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static('./src/public'));
    }

    async database() {
        await dbConnection();
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }

}

export default Server;