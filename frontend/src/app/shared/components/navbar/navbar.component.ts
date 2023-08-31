import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Input() mainLink:string = ''
@Input() isAdmin:boolean = false;
@Input() homeLink:string = '';
@Input() detailsLink:string = '';
@Output() click:EventEmitter<boolean> = new EventEmitter<boolean>();
isClosed:boolean = true;

hancleLogout(){
this.click.emit(this.isAdmin);
}
handleDropdown(){
  this.isClosed = !this.isClosed
}
}
