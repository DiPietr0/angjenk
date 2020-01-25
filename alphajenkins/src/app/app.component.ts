import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alphajenkins';
  public names : String[] = [];

  ngOnInit() {
    this.names[0] = "Ola";
    this.names[1] = "Descartes";
  }

}
