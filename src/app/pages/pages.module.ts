import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatModule } from '../chat/chat.module';
import { HomeComponent } from './home/home.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ContatoComponent } from './contato/contato.component';
import { ProcessoComponent } from './processo/processo.component';
import { HomeService } from '../services/home.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatModule
  ],
  declarations: [HomeComponent, AjudaComponent, ContatoComponent, ProcessoComponent],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class PagesModule { }
