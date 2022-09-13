import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Users } from '../user.model';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.css']
})
export class UsersDeleteComponent implements OnInit {
  user: Users = {
    id: null,
    userName: "",
    password: "",
    balance: null,
    url:""

  };
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.userService.readById(id).subscribe( user =>{
      this.user = user
    })
  }

  deleteProduct():void {
    this.userService.delete(this.user.id!).subscribe(()=>{
      this.userService.showMesage('Ususário excluido com sucesso !')
      this.router.navigate(["/users"]);
    })
  }

  cancel():void {
    this.router.navigate(["/users"]);
  }

}
