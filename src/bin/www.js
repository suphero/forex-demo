import * as dotenv from 'dotenv';
dotenv.config();
import app from '../app.js';
import { createServer } from 'http';

let port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);

let server = createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * On Error
 * @param {Error} error Error
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * On Listening
 */
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
