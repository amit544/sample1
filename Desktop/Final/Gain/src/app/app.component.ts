import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gain';
  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  
  }
  
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
   onActivate(event) {
    window.scroll(0,0);
    
    
  }
  ngOnInit(){
    document.getElementById('main').addEventListener('click', this.closeNav);
  }
}
