import { HttpClient } from '@angular/common/http';
import { Component , Inject , OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

export interface DialogData {
  name:string,
  img:string,
  song:any
 }

@Component({
  selector: 'app-sleep-dilog',
  templateUrl: './sleep-dilog.component.html',
  styleUrls: ['./sleep-dilog.component.css']
})
export class SleepDilogComponent implements OnInit{

  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  id='';
  playList: any;
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(data=>{
      this.id=data['id']
    })
  }

  order:any;
  data:Observable<any> | undefined;
  data2:Observable<any> | undefined;


  ngOnInit(): void {
    this.http.get('http://localhost:3000/sleep/'+this.id).subscribe(res=>{
         this.playList=res
         console.log(this.playList.name);
      
    })



    this.data=new Observable(res=>{
      setTimeout(()=>{
      location.reload();
      },40000);

     
   });

   this.data.subscribe(val=>{
     this.order=val
   });

   this.data.subscribe(val2=>{
     console.log('second Subscription');
     
   })
  }
  
}
