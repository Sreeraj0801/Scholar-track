import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { Subscription } from 'rxjs';
import { LoginPageService } from './login-page.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [],
})
export class LoginPageComponent implements OnDestroy  {
  inputDesign: string =
    'md:h-12 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
    private httpSubscription: Subscription[] = [];


    constructor(private _toast:ToastService ,
                private _service:LoginPageService) {}


  onSubmit(form: NgForm) {
    if (form.valid) {
      const subscription = this._service.adminLogin(form.value)
      .subscribe(response => {
        localStorage.setItem('adminToken',response?.accessToken)
      },err => {
      console.log(err);
      this._toast.showError(err.error.error ? err.error.error:'something went wrong')})   
    } else {
      this._toast.showError('Form submission failed. Please check the form.');
    }
  }



  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
  private unsubscribeAll(): void {
    this.httpSubscription.forEach((subscription) => subscription.unsubscribe());
    this.httpSubscription = [];
  }
}
