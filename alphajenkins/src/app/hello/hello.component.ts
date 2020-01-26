import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

  overAMillion(nr: number): String {
    return nr > 1000000 ? 'över en miljion' : 'ej över en miljon';
  }
}
