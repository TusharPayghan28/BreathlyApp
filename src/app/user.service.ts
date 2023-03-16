import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { Router } from '@angular/router';
import { Output , EventEmitter} from '@angular/core';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http:HttpClient , private router:Router) { }

  addUser(user:any){
    return this.http.post(`http://localhost:3000/user/`,user)
  }
  userName:any;
  
  userLogin(data:any){

    this.http.get<any>("http://localhost:3000/user")
    .subscribe(result=>{
      const user=result.find((a:any)=>{
        return a.email ===data.email && a.password === data.password
      });
      if(user){
        Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Success Full !!',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.navigate(['start']);
             
             this.userName=user;

             localStorage.setItem('userName',JSON.stringify(user.name ));
 
             localStorage.setItem('userEmail',JSON.stringify(user.email ));
            //  console.log(this.userName);
             
      }
      else{
        Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'User Not Found !!',
                showConfirmButton: false,
                timer: 1500
              })
      
      }

    },err=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Something went wrong !!',
        showConfirmButton: false,
        timer: 1500
      })
    })

    // this.http.get<any>(`http://localhost:3000/user?email=${data.email}&password:${data.password}`,
    // {observe:'response'})
    // .subscribe(result=>{
    //    if(result.body[0]){
    //      localStorage.setItem('user',JSON.stringify(result.body[0] ));
    //      this.router.navigate(['/start'])
  
    //      Swal.fire({
    //       position: 'center',
    //       icon: 'success',
    //       title: 'Login Success Full',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })


    //      console.log(result.body[0].name);
        
    //    }
    //    else{

    //     Swal.fire({
    //       position: 'center',
    //       icon: 'error',
    //       title: 'User Not Found',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })

    //    }

    // })
  }
  
  
  getData(){
    this.http.get(`http://localhost:3000/user`)
  }

  getImg(){
   return this.http.get('http://localhost:3000/song')
  }

  postData(name:any){
   return this.http.post('http://localhost:3000/user/',name);
  }

  getSleep(){
   return this.http.get('http://localhost:3000/sleep')
  }

  getMelodies(){
   return this.http.get('http://localhost:3000/melodies')
  }
}
