import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-mini-form',
  templateUrl: './mini-form.component.html',
  styleUrls: ['./mini-form.component.css']
})
export class MiniFormComponent {
@Input() label:string = ''
@Input() name:string = 'name';
@Input() content?:string;
@Output() value:EventEmitter<{}> = new EventEmitter<{}>();
constructor(private _toast:ToastService) {}


onSubmit(form: NgForm) {
  if (form.valid) {
    this.value.emit(form.value);
  } else {
    this._toast.showError('Form submission failed. Please check the form.');
  }}
}
