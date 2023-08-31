import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = 'button';
  @Input() design: string =
    'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2';
  @Input() type: string = 'button';
  @Input() isDisabled: boolean = false;
  
  @Output() btnClick:EventEmitter<void> = new EventEmitter<void>();
  handleButtonClick() {
    this.btnClick.emit()
  }
}
