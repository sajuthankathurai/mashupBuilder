import { Injectable } from '@angular/core';
import { DataWrapperService } from '../shared/data-wrapper.service';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    private _dragList: any;
    private _dropList: any;

    constructor(private dataWrapper: DataWrapperService) { }

    getPosts() {
        return this.dataWrapper.getData('assets/data.json');
    }
  
    getDragList() {
        return this._dragList;
    }


    setDragList(list) {
        this._dragList = list;
    }

    getDropList() {
        return this._dropList;
    }


    setDropList(list) {
        this._dropList = list;
    }



}
