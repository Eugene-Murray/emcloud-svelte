import express from 'express';
import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';
import cors from 'cors';
import bodyParser from 'body-parser';

//import mongoose from 'mongoose';

import usersRouter from './api/users';
import signalsRouter from './api/signals';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

export default class Server {
    constructor() { }

    run() {
        express() 
            .use(cors())
            .use(bodyParser.json()) // support json encoded bodies
            .use(bodyParser.urlencoded({ extended: true })) 
            .use('/api/signals', signalsRouter)
            .use('/api/users', usersRouter)
            .post('/api/test', function(req, res) {
                var user_id = req.body;
                console.warn(user_id);
                res.send(user_id);
            })
            .use(
                compression({ threshold: 0 }),
                sirv('static', { dev }),
                sapper.middleware()
            )
            .listen(PORT, err => {
                if (err) console.log('error', err);
            });
    }

    connectToMongo() {
        console.warn('connectToMongo()');
        // mongoose.connect('mongodb+srv://eugene-murray:Thedoors1#@cluster0-v83pi.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
        // const db = mongoose.connection;
        // db.on('error', console.error.bind(console, 'connection error:'))
        // db.once('open', function () {
        //     console.log('Connected to MongoDB') 
        // });
        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://cms-user:thedoors@cluster0-v83pi.azure.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            console.warn('connect');
            const collection = client.db("test").collection("test-collection");
            console.warn(collection.count);
            //client.close();

            const cursor = collection.find({a:1}).limit(2);

            // Iterate over the cursor
            while(cursor.hasNext()) {
                const doc = cursor.next();
                console.dir(doc);
            }

        });
    }
}
