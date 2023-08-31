import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ComponentsModule } from "../../shared/components/components.module";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),
      },
      {
        path: '',
        component:AdminPageComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./home-page/home-page.module').then(
                (m) => m.HomePageModule
              ),
          },
          {
            path: 'details',
            loadChildren: () =>
              import('./details-page/details-page.module').then(
                (m) => m.DetailsPageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
    declarations: [DetailsPageComponent, AdminPageComponent],
    imports: [RouterModule.forChild(routes), CommonModule, ComponentsModule]
})
export class AdminModule {}
