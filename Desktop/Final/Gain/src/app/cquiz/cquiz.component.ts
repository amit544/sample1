import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cquiz',
  templateUrl: './cquiz.component.html',
  styleUrls: ['./cquiz.component.css']
})
export class CquizComponent implements OnInit {
  quiz:any
  preprocesser:any
  opening:any
  closing:any
  constructor() { }
  correct:any
  ngOnInit() {
  //   
  this.preprocesser=`#include<stdio.h>`
  this.opening=`{`
  this.closing=`}`
  }
  right0(){
    console.log("right was clicked")
   document.getElementById('right0').style.backgroundColor="green"
  }
   wrong0( ){
    document.getElementById('wrong0').style.backgroundColor="red"
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
  wrong10( ){
    console.log("wrong was clicked")
    document.getElementById('right10').style.backgroundColor="green"
  }
  right10(){
    console.log("right was clicked")
   document.getElementById('right10').style.backgroundColor="green"
  }
  right11(){
    console.log("right was clicked")
   document.getElementById('right11').style.backgroundColor="green"
  }
  wrong11( ){
    console.log("wrong was clicked")
    document.getElementById('right11').style.backgroundColor="green"
  }
  wrong12( ){
    document.getElementById('right12').style.backgroundColor="green"
  }
  right12(){
    console.log("right was clicked")
   document.getElementById('right12').style.backgroundColor="green"
  }
  right13(){
   document.getElementById('right13').style.backgroundColor="green"
  }
  wrong13( ){
    document.getElementById('right13').style.backgroundColor="green"
  }
  wrong14( ){
    document.getElementById('right14').style.backgroundColor="green"
  }
  right14(){
   document.getElementById('right14').style.backgroundColor="green"
  }

  

}
