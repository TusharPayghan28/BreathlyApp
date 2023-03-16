import { Component , OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SongComponent } from '../song/song.component';
import { UserService } from '../user.service';


@Component({
  selector: 'app-relax',
  templateUrl: './relax.component.html',
  styleUrls: ['./relax.component.css']
})
export class RelaxComponent implements OnInit{

  constructor(private http:UserService, public dialog: MatDialog , private router:Router) {}

   item:any;
   ngOnInit(): void {
     this.http.getImg().subscribe(data=>{
      this.item=data
     })
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
