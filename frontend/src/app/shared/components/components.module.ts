import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { MiniFormComponent } from './mini-form/mini-form.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    ButtonComponent,
    InputBoxComponent,
    NavbarComponent,
    ModalComponent,
    MiniFormComponent
  ],
  imports: [
    CommonModule,RouterModule,
    FormsModule
  ],
  exports:[
    ButtonComponent,
    NavbarComponent,
    ModalComponent,
    MiniFormComponent
  ]
})
export class ComponentsModule { }
