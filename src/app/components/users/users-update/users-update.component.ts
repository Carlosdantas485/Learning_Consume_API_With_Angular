import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../user.model';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  user: Users = {
    userName:"",
    password:"",
    balance:null,
    url:""
  }
  constructor(
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id === null){
      throw Error;
    }
    this.userService.readById(id).subscribe((user)=>{
      this.user = user;
    })
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMesage("Produto atualizado com sucesso !");
      this.router.navigate(["/users"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/users"]);
  }


}
