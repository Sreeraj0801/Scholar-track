import { Component } from '@angular/core';
import { DetailsService } from './details.service';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
  private httpSubscription: Subscription[] = [];
  domainModal:boolean = false;
  contentValue:string = '';
  qualificationModal:boolean = false;
  constructor(private _service:DetailsService,
              private _toast:ToastService){}

  hancleModalClick(value:string){
    if(value === 'domain'){
      this.domainModal =!this.domainModal
    }else{
      this.qualificationModal = !this.qualificationModal ;
    }
  }

  handleSubmit(details:{}){    
        const subscription = this._service.addDomain(details).subscribe(response =>{
          this._toast.showSuccess(response.message);
          this.httpSubscription.push(subscription);
          this.contentValue= ''
          this.domainModal =!this.domainModal;
        },err => {
          this._toast.showError(err.error.error)
        })
  }
  handleQaulificationSubmit(details:{}){
    const subscription = this._service.addQualificaton(details).subscribe(response =>{
      console.log(response);
      this._toast.showSuccess(response?.message);
      this.httpSubscription.push(subscription);
      this.contentValue= ''
      this.domainModal =!this.domainModal;
    },err => {
      console.log(err);
      this._toast.showError(err.error.error)
    })
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
  private unsubscribeAll(): void {
    this.httpSubscription.forEach((subscription) => subscription.unsubscribe());
    this.httpSubscription = [];
  }
}
