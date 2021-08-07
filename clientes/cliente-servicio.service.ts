import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES} from './clientes.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteServicioService {
  getCliente(): Cliente[]{
      return CLIENTES;
  }
}
