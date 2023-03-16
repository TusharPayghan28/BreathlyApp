import { Component , Inject , OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
 name:string,
 img:string,
 song:any
}

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  // item=this.data;

  ngOnInit(): void {
    // console.log(this.data.ipath);
    
  }
}
