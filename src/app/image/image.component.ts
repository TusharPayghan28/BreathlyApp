import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SongComponent } from '../song/song.component';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{

  constructor(private http:UserService,public dialog: MatDialog) {}

  img:any;
  melodies:any;
  sleep:any;
  ngOnInit(): void {
    this.http.getImg().subscribe(data=>{
       this.img=data
    });

    this.http.getMelodies().subscribe(res=>{
          this.melodies=res;
    });

    this.http.getSleep().subscribe(result=>{
       this.sleep=result
    })
  }

  
 openMusic(item:any){
  this.dialog.open(SongComponent, {
    data:{
      name:item.name,
      img:item.ipath,
      song:item.song
    },
  });
 }

 sleepMusic(data:any){
  this.dialog.open(SongComponent, {
    data:{
      name:data.name,
      img:data.ipath,
      song:data.song
    },
  });
 }

 melodiesMusic(med:any){
  this.dialog.open(SongComponent, {
    data:{
      name:med.name,
      img:med.ipath,
      song:med.song
    },
  });
 }
}
