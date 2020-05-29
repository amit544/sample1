import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tocuniversity',
  templateUrl: './tocuniversity.component.html',
  styleUrls: ['./tocuniversity.component.css']
})
export class TocuniversityComponent implements OnInit {
 opening:any
 closing:any
  constructor() { }

  ngOnInit() {
    this.opening=`{`
    this.closing=`}`
  }

}
