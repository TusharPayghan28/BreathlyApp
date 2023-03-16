import { Component , OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SleepDilogComponent } from '../sleep-dilog/sleep-dilog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit{

  constructor(private http:UserService , public dialog: MatDialog , private router:Router){}

  sleep:any;
  ngOnInit(): void {
    this.http.getSleep().subscribe(data=>{
     this.sleep=data
    })
  }

  openMusic(item:any){
    // this.dialog.open(SleepDilogComponent, {
    //   data:{
    //     name:item.name,
    //     img:item.ipath,
    //     song:item.song
    //   },
    // });

    
    this.router.navigate(['/sleepdilog',{id:item.id}])
   }
}
