import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  right0(){
    console.log("right was clicked")
   document.getElementById('right0').style.backgroundColor="green"
  }
   wrong0( ){
    console.log("wrong was clicked")
    document.getElementById('right0').style.backgroundColor="green"
  }
  right1(){
    console.log("right was clicked")
   document.getElementById('right1').style.backgroundColor="green"
  }
   wrong1( ){
    console.log("wrong was clicked")
    document.getElementById('right1').style.backgroundColor="green"
  }
  right2(){
    console.log("right was clicked")
   document.getElementById('right2').style.backgroundColor="green"
  }
   wrong2( ){
    console.log("wrong was clicked")
    document.getElementById('right2').style.backgroundColor="green"
  }
  right3(){
    console.log("right was clicked")
   document.getElementById('right3').style.backgroundColor="green"
  }
   wrong3( ){
    console.log("wrong was clicked")
    document.getElementById('right3').style.backgroundColor="green"
  }
  right4(){
    console.log("right was clicked")
   document.getElementById('right4').style.backgroundColor="green"
  }
   wrong4( ){
    console.log("wrong was clicked")
    document.getElementById('right4').style.backgroundColor="green"
  }

}
