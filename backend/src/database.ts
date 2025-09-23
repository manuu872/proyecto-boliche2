import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "localhost", // Tu host de MySQL
    user: "root",  // Tu usuario de MySQL
    password: "Guisodelaabue1", // Contraseña de tu MySQL
    database: "bd_boliche", // Nombre de tu base de datos
});