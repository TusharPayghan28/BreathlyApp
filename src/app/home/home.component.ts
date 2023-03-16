import { Component , OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SongComponent } from '../song/song.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  constructor(private http:UserService,public dialog: MatDialog, private router:Router) {}

  myDate = new Date();

  data = window.localStorage.getItem('userName');

  hour=this.myDate.getHours()
  
 whish=`Good ${(this.hour<12 && 'morning') || (this.hour<17 && 'Afternoon') || (this.hour<20 && 'Evening') || (this.hour>20 && 'Night')}`;

 disableSelect = new FormControl(false);

 
//  userName='';

//  this.userName=this.http.userName;
 
 img:any;
 ngOnInit(): void {
  this.http.getImg().subscribe(res=>{
    this.img=res
  })
  console.log(this.img);
 }

 openMusic(item:any){
  // this.dialog.open(SongComponent, {
  //   data:{
  //     name:item.name,
  //     img:item.ipath,
  //     song:item.song
  //   },
  // });


  this.router.navigate(['/playsong',{id:item.id}])
 }

}
