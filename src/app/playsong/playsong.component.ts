import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playsong',
  templateUrl: './playsong.component.html',
  styleUrls: ['./playsong.component.css']
})
export class PlaysongComponent implements OnInit{


  id='';
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(data=>{
      this.id=data['id']
    })
  }

  playList:any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/song/'+this.id).subscribe(res=>{
         this.playList=res
         console.log(this.playList.name);
      
    })

   
    
  }
}
