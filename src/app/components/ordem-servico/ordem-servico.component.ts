import { OrdemServico } from './../model/ordemservico.model';
import { OrdemServicoService } from './../model/ordemservico.service';
import { VeiculoService } from './../model/Veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../model/cliente.service';
import { Veiculo } from '../model/veiculo.model';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.css']
})
export class OrdemServicoComponent implements OnInit {

  
  clientes: Cliente[]
  veiculos: Veiculo[]

  ordemservico: OrdemServico = {
    cliente: null,
    tipoOrdemServico: ' ',
    veiculo: null,
    km: ' ',
    observacao: ' '
  }

  @ViewChild('myForm') myForm: NgForm;

  tipoOrdemServico: string[] = ['REVISÃO', 'TROCA DE OLEO', 'TROCA DE PEÇA']
  
  constructor(private clienteService: ClienteService, private serviceVeiculo: VeiculoService,
              private ordemservicoService: OrdemServicoService,private router: Router) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clienteEvent =>{
      this.clientes = clienteEvent
    })

    this.serviceVeiculo.read().subscribe(veiculo =>{
      this.veiculos = veiculo
    })
  }

  createOrdemServico(): void{
    this.ordemservicoService.create(this.ordemservico).subscribe(os =>{
      this.ordemservicoService.showMessage("Ordem de Serviço Cadastrada com Sucesso")
      this.myForm.reset()
      //this.router.navigate(['painel/ordemServico'])
    })
  }

  cancel():void{
      this.router.navigate(['painel/ordemServico'])
  }
}
