import { Module } from '@nestjs/common';
import { AppController, UsuariosController, EventosController, EntradasController, ConsumosController, ProducotsController, TarjetasController, MovimentoSaldoController} from './app.controller';
import { AppService, UsuariosService, EventosService, EntradasService, ConsumosService, ProductosService, TarjetasService, MovimientoSaldoService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, EventosController, EntradasController, ConsumosController, ProducotsController, TarjetasController, MovimientoSaldoService],
  providers: [AppService, UsuariosService, EventosService, EntradasService, ConsumosService, ProductosService, TarjetasService, MovimientoSaldoService],
})
export class AppModule {}
