import { Component , OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-melodies',
  templateUrl: './melodies.component.html',
  styleUrls: ['./melodies.component.css']
})
export class MelodiesComponent implements OnInit{

  constructor(private http:UserService) {}

  item:any;
  sons:Boolean=false;
  ngOnInit(): void {
    this.http.getMelodies().subscribe(data=>{
       this.item=data
    })
  }

  hidden = false;
 
  startMusic(song:any){
    
    this.hidden = !this.hidden;


    let audio = new Audio();
    audio.src = song;

    if(this.hidden==true){
      audio.play();
    }
    else{
      audio.pause();
       console.log(this.hidden);
    }
    
    
  }

  // hidden = false;

  // toggleBadgeVisibility() {
  //   this.hidden = !this.hidden;
   
  // }

  // startMusic(song:any){
  //   this.hidden = !this.hidden;
  //   let audio=new Audio();
  //   audio.src=song;
  //   if(this.hidden==true){
  //   audio.play();
  //   console.log(this.hidden);
    
  //   }
  //  else{
  //    audio.pause();
  //     console.log(this.hidden);
      
  //   }
    
  // }

 
}
