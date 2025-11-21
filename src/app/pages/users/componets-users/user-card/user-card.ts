import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { User } from '../../../../models/user.model';
import { UsersServices } from '../../../../services/users-service';

@Component({
  selector: 'app-user-card',
  imports: [MatButtonModule,MatCardModule,MatIcon,CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard  {
 @Input() users: User[]= []
 @Output() id = new EventEmitter<number>()
 @Output() userIdDeleted = new EventEmitter<number>()

 constructor(private usersServices:UsersServices){}




 goToUserDetail(id: number){
   this.id.emit(id)
   }



   deleteUser(id: number, event: Event){
    event.stopPropagation()

    this.usersServices.deleteUser(id).subscribe((u) => {
      if (u)
      this.userIdDeleted.emit(id) 
      
    })

   
      
  
   }
}
