import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProprietarioComponent } from './listar.component';


const routes: Routes = [
  {
    path: '',
    component: ListarProprietarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarProprietarioRoutingModule {
}
