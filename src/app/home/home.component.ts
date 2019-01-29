import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../side-bar/side-bar.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  list: any;
  
  constructor(private sidebarService:SidebarService) { }

  ngOnInit() {

  }

}
