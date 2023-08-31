import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginValidatorDirective } from './login-validator/login-validator.directive';



@NgModule({
  declarations: [LoginValidatorDirective],
  imports: [
    CommonModule
  ],
  exports:[LoginValidatorDirective]
})
export class DirectivesModule { }
