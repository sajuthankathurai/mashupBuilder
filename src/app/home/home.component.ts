import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
  list: any;

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('SIDEBAR', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (component) => {
        return component;
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });
  }

  ngOnInit() {
    this.list = [];

  }



}
