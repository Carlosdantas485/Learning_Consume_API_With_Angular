import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent  {
  hide = true;

  data: any;
  
  profileForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required],
    phone: ['', Validators.required],
    cpf: ['', Validators.required],
    balance: ['', Validators.required],
    url: ['', Validators.required],
  });
  
  constructor(public userService: UserService, private router: Router, private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.profileForm.value.password);

    this.data = this.profileForm.value;
    this.userService.create(this.data).subscribe(()=>{
      this.userService.showMesage('Usuário criado com sucesso!')
      this.router.navigate(['/users'])
        this.userService.ShowDialog()
    })
  }

  cancel():void{
    this.router.navigate(['/users'])
  }
}
