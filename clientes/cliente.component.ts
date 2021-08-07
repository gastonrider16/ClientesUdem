import {Component} from '@angular/core';
import { Cliente } from './cliente';

@Component ({
    selector: 'app-clientes',
    templateUrl: './cliente.component.html'
})

export class ClientesComponent {
    clientes: Cliente[]=[
        {id: 1, nombre: "Clark", apellido: "Kent", email: "gg@gmail.com", createAt: "2017-05-02"},
        {id: 2, nombre: "Jose", apellido: "Lopez", email: "jj@gmail.com", createAt: "2017-05-02"}
    ];
    constructor(){

    }
}