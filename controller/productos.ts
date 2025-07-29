import { Request, Response } from "express";
import Producto from "../models/producto";
import { Op, QueryTypes } from "sequelize";




 export const getProductos  = async (req: Request,res: Response) =>{

    const productos = await Producto.findAll({
        where: {
            estado: {
                [Op.ne]: 0 // Excluye los productos con estado 0
            },
        }
    }); 

res.json({ productos }) 
}


export const getProducto  = async (req: Request,res: Response) =>{

        const {id} = req.params;
        const productoid = await Producto.sequelize?.query('select * from productos where id = :id ',{
            replacements: {
                id: `${id}`,
            },
          type: QueryTypes.SELECT
        })
         if(productoid != undefined){
            if(productoid.length >0)
            {
                res.json({ productoid})
            }
            else{
                res.json({
                    msg:'PRODUCTO NO ENCONTRADO ',
                   
                }) 
            }
            

         }
       
   
    
    }



    export const postProducto = async (req: Request,res: Response) =>{

        const { body } = req;
       


        try {
            const producto =  Producto.build(body);
            await producto.save();
            res.json({
              producto
            })
            
        } catch (error) {
            res.json({
                msg:'ERRO AL INCERTAR ',
                body
            })
        }

   
    
    }
  

    export const  puttProducto = async (req: Request,res: Response) =>{
        const {id} = req.params;
        const {body} = req;

        try {
            const producto = await Producto.findByPk(id);
            if(producto){
                await producto.update(body);
                res.json({
                    producto
                })
            }
            else{
                res.json({
                    msg:'ERRO AL MODIFICAR ',
                    body
                }) 
            }
         
            
        } catch (error) {
            res.json({
                msg:'ERRO AL INCERTAR ',
                body
            })
        }

    
    }