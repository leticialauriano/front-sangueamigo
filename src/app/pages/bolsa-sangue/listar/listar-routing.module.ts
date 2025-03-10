import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarBolsaSangueComponent } from './listar.component';


const routes: Routes = [
  {
    path: '',
    component: ListarBolsaSangueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarBolsaSangueRoutingModule {
}
