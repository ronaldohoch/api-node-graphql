import * as express from "express";

class App{
    public express: express.Application;

    constructor(){
        this.express = express();
        this.middleware();
    }

    private middleware(): void{
        console.log("middleware")
        this.express.use('/hello',(req:express.Request, res: express.Response, next:express.NextFunction)=>{
            res.send({
                hello:"Olá"
            });
        });
    }
}

export default new App().express;