import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  constructor(private http:UserService) {}


  user=this.http.userName;

  data = window.localStorage.getItem('userName');
 
  email = window.localStorage.getItem('userEmail');
  ngOnInit(): void {
   
  }
}
