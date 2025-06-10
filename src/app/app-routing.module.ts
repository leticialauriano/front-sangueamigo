import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./pages/sobre-nos/sobre-nos.module').then(m => m.SobreNosModule),
  },  
  {
    path: 'sistema',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'bolsa-sangue',
        loadChildren: () => import('./pages/bolsa-sangue/bolsa-sangue.module').then(m => m.BolsaSangueModule),
      },
      {
        path: 'proprietario',
        loadChildren: () => import('./pages/proprietario/proprietario.module').then(m => m.ProprietarioModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
