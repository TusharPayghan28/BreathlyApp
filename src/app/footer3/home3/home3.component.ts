import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit{

  promiseVal:any;

  DellAvailable(){
    return true
  }

  HpAvailable(){
    return false
  }

  dell={
    brand:'Dell',
    hardDisk:'2 TB',
    color:'Black'
  }


  hp={
    brand:'Hp',
    hardDisk:'1 TB',
    color:'Silver'
  }

  notAvil={
    brand:'Not Available',
    status:'Failed'
  }

  ngOnInit(): void {
    
    let buyLaptop=new Promise((resolve,reject)=>{
      if(this.DellAvailable()){
        return setTimeout(()=> {
          resolve(this.dell)
        } ,3000)
      }
      else if(this.HpAvailable()){
        return setTimeout(()=>{
          resolve (this.hp)
        },3000)
      }
      else{
        return setTimeout(()=>{
          reject(this.notAvil)
        },3000)
      }
    });
  
    buyLaptop.then(res=>{
      console.log('then code =>',res);
      this.promiseVal=res;
    }).catch(res=>{
      console.log('catch code =>',res);
      this.promiseVal=res;
    })
  
  }
}