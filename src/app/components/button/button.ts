import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIcon],
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
