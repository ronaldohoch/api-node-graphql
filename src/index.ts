import * as http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen(3100);
server.on('listening',()=>{
    console.log("Escutando");
});