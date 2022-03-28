import app from '../src/app';
import Debug from 'debug';
import * as http from "http";
import {type} from "os";
import {add} from "husky";
import logger from 'jet-logger';

const debug = Debug('node-express-typescript-postgresql-boilerplate:server')

function normalizePort(val: string) {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0) {
        return port;
    }

    return false;
}

function onError(error: { syscall: string; code: any; }) {
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const address = server.address();
    const bind = typeof address == 'string'? 'pipe ' + address : 'port ' + port;
    logger.info(`Listening on ${bind}`)
}

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);