import { Router } from '@angular/router';
import { Users } from '../user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  user: Users ={
    userName:'',
    password: '',
    rePassword: '',
    phone: null,
    cpf: null,
    url:'',
  }

  formulario!: FormGroup;

  constructor(public userService: UserService, private router: Router) { }
  ngOnInit(): void {
  }
  createUser():void{
     this.userService.create(this.user).subscribe(()=>{
      this.userService.showMesage('Usuário criado com sucesso!')
      this.router.navigate(['/users'])
      this.userService.ShowDialog()
    })
  }

  cancel():void{
    this.router.navigate(['/users'])
  }

}
