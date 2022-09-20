import './pre-start'; // Must be the first import
import logger from 'jet-logger';
const http = require('http')
const SocketServer = require('../src/sockets/socket')

import envVars from '@shared/env-vars';

import app from './server';
const server = http.createServer(app)
SocketServer(server)


// Constants
const serverStartMsg = 'Express server started on port: ';

// Start server
server.listen(envVars.port, () => {
  logger.info(serverStartMsg + envVars.port.toString());
});
