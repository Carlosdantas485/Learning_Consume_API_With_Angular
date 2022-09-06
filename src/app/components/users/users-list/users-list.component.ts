import { Component, OnInit } from '@angular/core';
import { Users } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users!: Users[];
  returnRed = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers():void{
    this.userService.listUsers().subscribe(user=>{
      this.users = user;
    })
  }

  canShow(){
    
  }

}
