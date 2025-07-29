import { DataTypes } from "sequelize";
import db from "../db/connection";

const Producto = db.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING
  },
  img: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  estado: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
  
}, {
    createdAt: false,
    updatedAt: false,
  tableName: 'productos'
});

export default Producto;
