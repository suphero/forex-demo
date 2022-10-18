import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { createServer } from 'http';

let port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);

let server = createServer(app);

server.listen(port);
server.on('listening', () => {
  console.log('Listening on ' + port);
});

export default server;
