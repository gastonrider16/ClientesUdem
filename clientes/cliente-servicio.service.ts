import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES} from './clientes.json';
import { Observable } from 'rxjs'; //'rxjs/Observable
import { of } from 'rxjs'; //'rxjs/observable/of'

@Injectable({
  providedIn: 'root'
})
export class ClienteServicioService {
  getCliente(): Observable<Cliente[]>{
      return of(CLIENTES);
  }
}
