import { Directive, Input } from '@angular/core';
import {NG_VALIDATORS,Validator,AbstractControl,ValidationErrors} from '@angular/forms'
import { isValidEmail } from 'src/app/config/config.function';

@Directive({
  selector: '[appLoginValidator]',
  providers:[{
    provide:NG_VALIDATORS,useExisting:LoginValidatorDirective,multi:true
  }]
})
export class LoginValidatorDirective {
  @Input('appLoginValidator') validationType?:string;
  
    validate(control: AbstractControl): ValidationErrors | null {      
      if (this.validationType === 'email' && !this.isValidEmail(control.value)) {
        return { 'invalidEmail': true };
      }
  
      if (this.validationType === 'password' && !this.isPasswordValid(control.value)) {
        return { 'invalidPassword': true };
      }
  
      return null;
    }
  
    private isValidEmail(email: string):boolean {
      //This is an outside function
      return isValidEmail(email)
    }
  
    private isPasswordValid(password: string): boolean {
      return password.length >= 5;
    }

}
