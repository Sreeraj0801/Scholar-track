import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


const routes:Routes = [{path:'',component:DetailsPageComponent,title:'Admin | Details'}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsPageModule { 
  constructor(){}


}
