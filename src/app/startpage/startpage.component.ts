import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit{


  constructor(private http:UserService) {}

  // const result=JSON.parse(window.localStorage.getItem('Storage'));
     data = window.localStorage.getItem('userName');
    name=this.http.userName;
  
   ngOnInit(): void {
      // console.log(this.name);
   
   }

   keepOriginalOrder(a:any, b:any){
    return a.key;
  }
}
