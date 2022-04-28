import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldir',
  templateUrl: './structuraldir.component.html',
  styleUrls: ['./structuraldir.component.css']
})
export class StructuraldirComponent implements OnInit {

  constructor() { }

  fruits:Array<string>=["Apple","Banana","Chikku","PineApple"];

  disp:boolean=true;

  switch=3;

  ngOnInit() {
  }

}
