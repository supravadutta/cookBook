import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:string=''
  detail:any= {}
  isLoaded:boolean=false

  constructor(
    private _router:ActivatedRoute,
    private _dataService:DataService
  ) { }

  ngOnInit() {
   this.id=this._router.snapshot.paramMap.get('id')
   console.log(this.id)
   this._dataService.getDetails(this.id).subscribe((data)=>{
     this.isLoaded=true
    this.detail=data
    console.log(this.detail) 
   })
   
  }

}
