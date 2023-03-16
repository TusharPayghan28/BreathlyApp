import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {

  constructor(private http:UserService,private routers:Router) {}

  user=this.http.userName

  router(){
   this.routers.navigate(['/home'])
  }


}
