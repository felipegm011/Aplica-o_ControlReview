import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from './../model/Veiculo.service';
import { Veiculo } from './../model/veiculo.model';


@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent implements OnInit {

  constructor(private veiculoService: VeiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  veiculo: Veiculo = {
    placa: ' ',
    modelo: ' ',
    ano: 2021,
    cor: ' '
  }

  createVeiculo(): void{
    this.veiculoService.createVeiculo(this.veiculo).subscribe(() =>{
    this.veiculoService.showMessage("Veiculo Cadastrado com Sucesso!!!")
    console.log(this.veiculo)
    })
  }

  cancel(): void{
    this.router.navigate(['painel/veiculo'])
  }

}
