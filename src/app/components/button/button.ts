import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
label= input('')
icon= input('')
btnClick= output()
type= input('')

buttonClick(){
 this.btnClick.emit()
}
}
