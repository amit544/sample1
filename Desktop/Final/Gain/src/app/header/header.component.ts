import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  menu: boolean;
  handleAsideClick($event){
    console.log("any")
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  
  }
  
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.menu = false;
    } else {
      this.closeNav();
      console.log('clicked outside');
    }
  }
    constructor(public router: Router,
      private eRef: ElementRef) {}
      
  showMenu() {
    this.menu = !this.menu;
  }

  ngOnInit(){
    document.getElementById('main').addEventListener('click', this.closeNav);
  }

}
