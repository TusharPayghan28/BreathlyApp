import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControlName , Validators , FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

 constructor(private service:UserService , private fb:FormBuilder,private authService: SocialAuthService,private router:Router,private http:HttpClient) {}
 hide = true;
 
 loginForm=this.fb.group({
  email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z]).{8,30}")]]
})

get email(){
  return this.loginForm.get('email');
}
get pass(){
  return this.loginForm.get('password');
}


login(){
 this.service.userLogin(this.loginForm.value)
}

data:any;


user: any;
loggedIn: any;
userSignup:any;



name:any;
ngOnInit(): void {

  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    this.userSignup={name: this.user.name , email: this.user.email, password: ' '}
  
     this.service.postData(this.userSignup).subscribe((uname:any)=>{
      if(uname){
      
        this.router.navigate(['/start'])
        // Swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'Login SuccessFull!!',
        //   showConfirmButton: false,
        //   timer: 1500
        // })
      }
     })
  });
 
}

//  userEmailid=this.user.name;




  googleLogin(){
    this.service.postData(this.userSignup).subscribe(res=>{
      // if(res){
      //   this.router.navigate(['/login'])
      //   Swal.fire({
      //     position: 'center',
      //     icon: 'success',
      //     title: 'Registation Success Full',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // }
      
    })
    
    console.log(this.userSignup);
  }
}
