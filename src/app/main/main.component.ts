import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ken-main',
    templateUrl: './main.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
