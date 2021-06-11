import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../model/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  cliente: Cliente[]

  displayedColumns = ['id','name','email','fone']


  constructor(private clienteService: ClienteService) { }

  
  // metodo é executado depois que todo componente é criado
  ngOnInit(): void{
    this.clienteService.read().subscribe(clienteEvent =>{
      this.cliente = clienteEvent
    })
  }

}
