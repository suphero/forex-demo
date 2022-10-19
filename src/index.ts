import 'reflect-metadata';
import * as dotenv from 'dotenv';
import Container from 'typedi';
dotenv.config();
import { App } from './app';
import { createServer } from 'http';

const { app } = Container.get(App);
let port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);

let server = createServer(app);

server.listen(port);
server.on('listening', () => {
  console.log('Listening on ' + port);
});

export default server;
