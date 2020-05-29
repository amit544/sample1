import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit ,OnDestroy{
  isActive=false
  ads:any
  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
    http:HttpClient) { 
      // http.get('https://www.amazon.in/gp/product/819324527X/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=819324527X&linkCode=as2&tag=gainngain-21&linkId=dca7801df85eeca0256af6980e6fd457')
      // .subscribe(response=>{
      //   this.ads=response
      //   console.log(this.ads)
      // })
    }
  currentPage = 0;
  changePage(index: number): void {
    this.currentPage += index;
}
call(id){
  document.getElementById(id).style.backgroundColor="green"
}

  ngOnInit() {
     
    // 
    
 }
 @HostListener('unloaded')
 ngOnDestroy() {
  console.log('Items destroyed');
}
 
  
  }


