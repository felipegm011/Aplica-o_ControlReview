import { OrdemServico } from './../../../model/ordemservico.model';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ManuPreventiva } from './../../../model/manupreventiva.model';

import { Component, OnInit } from '@angular/core';
import { ManupreventivaService } from 'src/app/services/manupreventiva.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manutencao-prenvent',
  templateUrl: './manutencao-prenvent.component.html',
  styleUrls: ['./manutencao-prenvent.component.css']
})
export class ManutencaoPrenventComponent implements OnInit {

  constructor(private servicerevisao: ManupreventivaService, private router: Router) {}

  ordemservico: OrdemServico[]

  manuprevente: ManuPreventiva = {
    ordemservico: null,
    embreagem : false,
    freio: false,
    luzespainel: false,
    niveloleo: false,
    kittracao: false,
    carburador: false,
    pneu: false,
    observacao: ' '
  }

  ngOnInit(): void {
    this.servicerevisao.read().subscribe(os =>{
      this.ordemservico = os
    })
  }

  createManutencaoPrevent(): void{
    this.servicerevisao.savemanupreventiva(this.manuprevente).subscribe(()=>{
      this.servicerevisao.showMessage("Manutenção salva com sucesso!!")
    })
  }

  cancel(): void{
    this.router.navigate[' ']
  }

}
