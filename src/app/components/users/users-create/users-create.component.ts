import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component} from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent  {
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
    // TODO: Use EventEmitter with form value
    console.warn();

    this.data = this.profileForm.value;

    this.userService.create(this.data).subscribe(()=>{
      this.userService.showMesage('Usuário criado com sucesso!')
      this.router.navigate(['/users'])
        this.userService.ShowDialog()
    })
  }



  /*

  formUser!: FormGroup;

  usuario = {
    userName: '',
    password: '',
    rePassword:'',
    phone: '',
    cpf: '',
    balance: ''
  }

  form = new FormGroup({
    name: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required),
    rePassword: new FormControl ('', Validators.required),
    phone: new FormControl ('', Validators.required),
    cpf: new FormControl ('', Validators.required),
    balance: new FormControl ('', Validators.required),
  })

  @Input() classCss:any;

  constructor(public userService: UserService, private router: Router, private formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
    this.exect(new Users());
  }

  createUser():void{
      
    

    
  }

  onSubmit(formulario:any){
    console.log(formulario);
  }
  
  exect(userForm: Users){

    this.formUser = new FormGroup({
      userName: new FormControl (userForm.userName),
      password: new FormControl (userForm.password),
      rePassword: new FormControl (userForm.rePassword),
      phone: new FormControl (userForm.phone),
      cpf: new FormControl (userForm.cpf),
      balance: new FormControl (userForm.balance),
    })

  }
  cancel():void{
    this.router.navigate(['/users'])
  }
  */
}
