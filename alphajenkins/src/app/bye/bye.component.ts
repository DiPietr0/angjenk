import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.css']
})
export class ByeComponent implements OnInit {
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
  }

  add(nr1: number, nr2: number): number {
    return nr1 + nr2;
  }

}
