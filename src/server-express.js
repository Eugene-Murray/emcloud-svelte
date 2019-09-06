import express from 'express';
import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';
import cors from 'cors';

import usersRouter from './api/users';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

export default class Server {
    constructor() { }

    run() {
        express() 
            .use(cors())
            .use('/api/users', usersRouter)
            .use(
                compression({ threshold: 0 }),
                sirv('static', { dev }),
                sapper.middleware()
            )
            .listen(PORT, err => {
                if (err) console.log('error', err);
            });
    }
}
