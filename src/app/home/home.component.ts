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
    this.list = ['Component 1','Component 2'];
    this.sidebarService.setDropList(this.list);

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === event.previousContainer.id) {
      moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(this.sidebarService.getDragList(),
        this.list,
        event.previousIndex,
        event.currentIndex);
      this.sidebarService.setDropList(this.list);
    }
  }

}
