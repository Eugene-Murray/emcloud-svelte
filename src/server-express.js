import express from 'express';
import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';

import usersRouter from './api/users';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

export default class Server {
    constructor() { }

    run() {
        express() // You can also use Express
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
