import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recepie:any[]=[]
  type:string=''
  isLoaded:boolean=false

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.dataService.getData('').subscribe((data)=>{
      this.isLoaded=true
      this.recepie=data['results']
      console.log(this.recepie)
    })
  }
  show(){
    this.isLoaded=false
    console.log(this.type)
    this.dataService.getData(this.type).subscribe((data)=>{
      this.isLoaded=true
      this.recepie=data['results']
      console.log(this.recepie)
    })
  }

}
