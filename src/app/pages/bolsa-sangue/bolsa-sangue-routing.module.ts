import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listar',
    loadChildren: () => import('./listar/listar.module').then(m => m.ListarBolsaSangueModule),
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolsaSangueRoutingModule {
}
