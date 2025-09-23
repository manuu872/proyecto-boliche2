import { Injectable } from '@nestjs/common';

//Impors de la base de datos.
import { db } from "./database";

//Servicio para el controlador principal
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}


//Servicio para manejar usuarios
@Injectable()
export class UsuariosService {
  async getUsuarios() {
    const [rows] = await db.query("SELECT * FROM usuario");
    return rows;
  }
}

@Injectable()
export class EventosService {
  async getUsuarios() {
    const [rows] = await db.query("SELECT * FROM evento");
    return rows;
  }
}

@Injectable()
export class EntradasService {
  async getUsuarios() {
    const [rows] = await db.query("SELECT * FROM entrada");
    return rows;
  }
}

@Injectable()
export class ConsumosService {
  async getUsuarios() {
    const [rows] = await db.query("SELECT * FROM consumo");
    return rows;
  }
}

@Injectable()
export class ProductosService {
  async getUsuarios() {
    const [rows] = await db.query("SELECT * FROM producto");
    return rows;
  }
}

@Injectable()
export class TarjetasService {
  async getUsuarios() {
    const [rows] = await db.query("SELECT * FROM tarjeta");
    return rows;
  }
}

@Injectable()
export class MovimientoSaldoService {
  async getUsuarios() {
    const [rows] = await db.query("SELECT * FROM movimientosaldo");
    return rows;
  }
}