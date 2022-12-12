import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient){ }
  calculatee=0
  rate=0
  amount=0
  from=""
  to=""
  arr:any[] = []
  fromSubscriber(e:any){
    this.from = e
  }
  toSubscriber(e:any){
    this.to = e
  }
  convert(){
    this.http.get(`https://open.er-api.com/v6/latest/${this.from}`)
    .subscribe((x:any)=>{
      this.rate = x.rates[this.to]
      this.calculatee = this.rate*this.amount
    })
  }
}
