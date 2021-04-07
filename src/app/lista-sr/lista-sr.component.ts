import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-sr',
  templateUrl: './lista-sr.component.html',
  styleUrls: ['./lista-sr.component.css']
})
export class ListaSrComponent implements OnInit {
  ret = [
    {"id":"1","sr":"010101010101","descrizione":"lalalalalal","importo":"1000"},
    {"id":"2","sr":"020202020202","descrizione":"lalalalalal","importo":"1000"},
    {"id":"3","sr":"030303030303","descrizione":"lalalalalal","importo":"1000"}
  ]
  ret1 = [];
  constructor(private http: HttpClient) { }
//http://localhost:8080/api/sr5G/All
//https://jsonplaceholder.typicode.com/posts
  ngOnInit() {
    this.http.get('http://localhost:8080/api/sr5G/all',{}).subscribe(
      (payload: any) => {
        this.ret1 = payload//JSON.parse(JSON.stringify(payload))
        }

    )
  }

  test(){
    alert(this.ret1[0].title)
  }
  duplicaRecord(index){
    let newRec = {};
    newRec['id'] = -1;
    newRec['sr'] = -1;
    newRec['descrizione'] = this.ret1[index].descrizione;
    newRec['importo'] = this.ret1[index].importo; 
//this.ret1.
this.ret1.splice    
    (index+1,0,newRec)
  }

}