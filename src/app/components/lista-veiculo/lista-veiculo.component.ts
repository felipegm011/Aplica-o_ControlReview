import { VeiculoService } from './../model/Veiculo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../model/veiculo.model';

@Component({
  selector: 'app-lista-veiculo',
  templateUrl: './lista-veiculo.component.html',
  styleUrls: ['./lista-veiculo.component.css']
})
export class ListaVeiculoComponent implements OnInit {

  veiculo: Veiculo[]
  displayedColumns = ['id','modelo','placa','ano','cor']
  
  constructor(private serviceVeiculo: VeiculoService) { }

  ngOnInit(): void {
    this.serviceVeiculo.read().subscribe(veiculo =>{
      this.veiculo = veiculo
    })
  }

  

}
