import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import {HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
];
@NgModule({
  declarations: [
    LoginPageComponent,],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginPageModule { }
