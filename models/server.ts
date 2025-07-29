import express, { Application } from 'express'
import productosRoutes from "../routes/productos";

import cors from "cors";
import db from '../db/connection';


class Server {


    private app: Application;
    private port: string;
    private apiPaths = {  
        productos: '/api/productos'
        
    }
 
 
    constructor() {
         this.app = express(); 
         this.port = process.env.PORT || "8002";
         this.dbConnection();
        this.middlewares();
         // definir mis rutas
         this.routes();
         
    }



        async dbConnection(){

            try {
                await db.authenticate();
                console.log("CONEXION EXITOSA");
            } catch (error) {
                console.log("CONEXION FALLO");
                
            }
        }

    middlewares(){


        //CORS
        this.app.use(cors());

        // lectura de body
        this.app.use(express.json());





    }

    routes(){
        this.app.use(this.apiPaths.productos, productosRoutes)
    }

    listen(){


        this.app.listen(this.port, ()=>{


            console.log('Servidor corriendo en puerto:'+ this.port);


        })

    }


}

export default Server