import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProcessoComponent } from './pages/processo/processo.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    ProcessoComponent,
    AjudaComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
