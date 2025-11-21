import { Component, Input, input } from '@angular/core';
import { User } from '../../../../models/user.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-user-main-info',
  imports: [CommonModule, MatCardModule],
  templateUrl: './user-main-info.html',
  styleUrl: './user-main-info.css',
})
export class UserMainInfo {
@Input() user!: User
}
