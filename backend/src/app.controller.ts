import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Importar el servicio de usuarios
import { UsuariosService } from './app.service';

// Controlador principal
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// Controlador para manejar rutas de usuarios
@Controller("usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async getAll() {
    return this.usuariosService.getUsuarios();
  }
}

// Controlador para manejar rutas de eventos
@Controller("eventos")
export class EventosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async getAll() {
    return this.usuariosService.getUsuarios();
  }
}

// Controlador para manejar rutas de entradas
@Controller("entradas")
export class EntradasController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async getAll() {
    return this.usuariosService.getUsuarios();
  }
}

// Controlador para manejar rutas de entradas
@Controller("consumos")
export class ConsumosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async getAll() {
    return this.usuariosService.getUsuarios();
  }
}

@Controller("productos")
export class ProducotsController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async getAll() {
    return this.usuariosService.getUsuarios();
  }
}

@Controller("tarjetas")
export class TarjetasController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async getAll() {
    return this.usuariosService.getUsuarios();
  }
}

@Controller("movimiento-saldo")
export class MovimentoSaldoController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async getAll() {
    return this.usuariosService.getUsuarios();
  }
}