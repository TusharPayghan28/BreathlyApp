import { Component , OnInit} from '@angular/core';
import { FormControl , FormControlName , FormGroup , Validators, NgModel, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

    constructor(private fb:FormBuilder , private service:UserService , private router:Router)  {}

  ngOnInit(): void {
   
  }

  hide = true;


  userlogin= this.fb.group({
    name:['',[Validators.required,Validators.pattern("[A-Z][a-z]+")]],
    email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$")]],
    password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z]).{8,30}")]]
  })

  userSubmit(){
    this.service.addUser(this.userlogin.value).subscribe(data=>{
      if(data){
        this.router.navigate(['/login'])
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registation Success Full',
          showConfirmButton: false,
          timer: 1500
        })
      }
      
    })
    // console.log(this.userlogin.value);
    
  }

  get email(){
    return this.userlogin.get('email')
  }

  get name(){
    return this.userlogin.get('name')
  }

  get password(){
    return this.userlogin.get('password')
  }



}
