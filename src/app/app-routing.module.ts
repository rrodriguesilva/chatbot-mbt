import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AjudaComponent} from './pages/ajuda/ajuda.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProcessoComponent } from './pages/processo/processo.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'processo', component: ProcessoComponent },
{ path: 'ajuda', component: AjudaComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
