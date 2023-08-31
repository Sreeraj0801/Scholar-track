import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ButtonComponent,
    InputBoxComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    ButtonComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
