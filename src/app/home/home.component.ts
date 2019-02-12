import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import 'hcl-ers-edge-responsive-table-master/src/core-grid-datatypes/core-grid-datatypes.js';
declare var grapesjs: any; // Important!

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
  list: any;
  public apirequest: any;
  public tableconfig: any;

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
    this.apirequest = { "handlerURL": "https://my-json-server.typicode.com/VelmuruganHCL/gridDemo/db" };
    this.tableconfig = {
      "id": "materialsummary",
      "theme": "blue",
      "title": {
        "text": "Employee Details",
        "align": "center",
        "style": { "fontSize": "18px", "fontWeight": "bold", "fontFamily": "Arial, Helvetica, sans-serif", "color": "#333333" }
      },
      "subtitle": { "text": "Employee details table", "align": "center", "style": { "fontSize": "14px", "fontFamily": "Arial, Helvetica, sans-serif", "fontWeight": "normal", "color": "#666666" } },
      "search": { "enabled": true },
      "cellTemplate": [{ "name": "checkbox", "value": "empid", "enabled": true }, { "name": "legend", "value": ["empid", "empname"], "color": ["#FFD042", "#db8f25"], "enabled": true }, { "name": "link", "value": ["empid"], "enabled": true }, { "name": "icon", "icons": ["edit", "delete", "download"], "enabled": true }]
    };

    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      fromElement: true,
      // Size of the editor
      height: '300px',
      width: 'auto',
      storageManager: {
        type: null
      },
      panels: {
        defaults: []
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: [{
          id: 'section',
          label: '<div class="tile"><img src="images/m_table.png" /></div>',
          attributes: {
            class: 'gjs-block-section'
          },
          content: {
            script:  console.log("hello") ,
            content: '<core-grid-datatypes apirequest={"handlerURL":"https://my-json-server.typicode.com/VelmuruganHCL/gridDemo/db"} tableconfig={"id":"materialsummary","theme":"blue"}></core-grid-datatypes>'
          }
        },
        {
          id: 'text',
          label: 'Text',
          content: '<div data-gjs-type="text">Insert your text here</div>'
        },
        {
          id: 'input',
          label: 'Input',
          content: '<label class="label">Name</label><input placeholder="Type here your name" class="input"/>'
        },
        {
          id: 'button',
          label: 'Button',
          content: '<button type="submit" class="button">Save</button>'
        }
        ]
      }
    });

    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'export',
          className: 'btn-open-export',
          label: 'Export Code',
          command: 'export-template',
          context: 'export-template' // For grouping context of buttons from the same panel
        }

      ]
    });

  }



}
