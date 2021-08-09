import {Component, OnInit} from '@angular/core';
import { Cliente } from './cliente';
import { ClienteServicioService } from './cliente-servicio.service';
import {CLIENTES} from './clientes.json';
@Component ({
    selector: 'app-clientes',
    templateUrl: './cliente.component.html'
})

export class ClientesComponent implements OnInit{
    clientes: Cliente[] = [];
    constructor(private miServicio:ClienteServicioService){
    }
    ngOnInit(): void {
        //this.clientes = CLIENTES;
        //this.clientes = this.miServicio.getCliente();
        this.miServicio.getCliente().subscribe(
            (clientes) => {this.clientes = clientes;}
            //OTRA FORMA: clientes => this.clientes = clientes;
        )
    }
}