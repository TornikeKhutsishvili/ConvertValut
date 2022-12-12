import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-convert-select',
  templateUrl: './convert-select.component.html',
  styleUrls: ['./convert-select.component.css']
})
export class ConvertSelectComponent implements OnInit {

  constructor(private http:HttpClient){  }
  arr:any[] = []
  ngOnInit(): void {
    this.http.get<any>('https://open.er-api.com/v6/latest/USD')
    .subscribe((x:any): void=>{
      for(let i of Object.keys(x.rates)){
        this.arr.push(i)
      }
    });
  }
  @Output()
  fromEmitter:EventEmitter<any> = new EventEmitter()
  @Output()
  toEmitter:EventEmitter<any> = new EventEmitter()
  from:string=""
  to:string=""

  chooseCurrency(){
    this.fromEmitter.emit(this.from)
  }
  exchangeRate(){
    this.toEmitter.emit(this.to)
  }
}









  // @Output()
  // fromEmitter:EventEmitter<any> = new EventEmitter()
  // @Output()
  // toEmitter:EventEmitter<any> = new EventEmitter()
  // from:string=""
  // to:string=""

  // choosecurrency=0
  // chooseCurrency(){
  //   this.http.get(`https://open.er-api.com/v6/latest/${this.from}`)
  //   .subscribe((x:any): void=>{
  //     // console.log(x.rates[this.from])
  //     this.choosecurrency = x.rates[this.from]
  //   })
  // }
  // exchangerate=0
  // exchangeRate(){
  //   this.http.get(`https://open.er-api.com/v6/latest/${this.from}`)
  //   .subscribe((x:any): void=>{
  //     // console.log(x.rates[this.to])
  //     this.exchangerate = x.rates[this.to]
  //   })
  // }
// }
