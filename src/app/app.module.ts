import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { AppRoutingModule } from './app-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { ContentIconsComponent } from './components/template/content-icons/content-icons.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule}from '@angular/material/list';

import {MatGridListModule} from '@angular/material/grid-list';
import { CadastroVeiculoComponent } from './components/cadastro-veiculo/cadastro-veiculo.component';
import { ManutencaoPrenventComponent } from './components/manutencao-prenvent/manutencao-prenvent.component';
import { OrdemServicoComponent } from './components/ordem-servico/ordem-servico.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import { ColorButtonNavDirective } from './directives/color-button-nav.directive';
import { ClienteCrudComponent } from './components/cliente-crud/cliente-crud.component';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
import { VeiculoCrudComponent } from './components/veiculo-crud/veiculo-crud.component';
import { ListaVeiculoComponent } from './components/lista-veiculo/lista-veiculo.component';
import { MatTableModule } from '@angular/material/table';

// transformando formatação sepradores de casas decimais na utilização de PIPES 
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CadastroClienteComponent,
    ContentIconsComponent,
    CadastroVeiculoComponent,
    ManutencaoPrenventComponent,
    OrdemServicoComponent,
    RelatorioComponent,
    ColorButtonNavDirective,
    ClienteCrudComponent,
    ListaClienteComponent,
    VeiculoCrudComponent,
    ListaVeiculoComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule
  ],

  // definindo formatação como pt-BR
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
