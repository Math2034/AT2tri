import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlertController } from '@ionic/angular';
 
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'teste/:banda/:album/:musica',
    loadChildren: () => import('./teste/teste.module').then( m => m.TestePageModule)
  },
  {
    path: 'conferencia/:valor',
    loadChildren: () => import('./conferencia/conferencia.module').then( m => m.ConferenciaPageModule)
  },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
