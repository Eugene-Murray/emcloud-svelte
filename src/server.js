//import Server from './server-polka';
import Server from './server-express';

const server = new Server();
server.run();
//server.connectToMongo();
