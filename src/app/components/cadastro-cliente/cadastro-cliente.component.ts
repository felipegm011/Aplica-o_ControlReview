
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../model/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router,
              ) { }

  client: Cliente = {
    name: ' ',
    email: ' ',
    fone: ' '
  }

  ngOnInit(): void {
  }

  createClient(): void {
      this.clienteService.createCliente(this.client).subscribe(() =>{
      this.clienteService.showMessage("Cadastrado com Sucesso")
      
      //this.router.navigate([''])
    })
  }

  cancel(): void{
    this.router.navigate(['painel/cliente'])
  }
}
