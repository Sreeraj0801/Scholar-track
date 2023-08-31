import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'login',loadChildren:()=>import('./login-page/login-page.module').then(m => m.LoginPageModule)
      },
      {
        path:'home',loadChildren:()=>import('./home-page/home-page.module').then(m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), 
    CommonModule],
})
export class AdminModule {}
