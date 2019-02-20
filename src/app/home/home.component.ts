import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import 'hcl-ers-edge-responsive-table-master/src/core-grid-datatypes/core-grid-datatypes.js';

declare var grapesjs: any; // Important!
import thePlugin from 'grapesjs-blocks-basic';
import thePlugin2 from 'grapesjs-plugin-export';

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

      plugins: [thePlugin, thePlugin2],
      pluginsOpts: {
        thePlugin: {
          blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
          flexGrid: 0,
          stylePrefix: 'gjs-',
          addBasicStyle: true,
          category: 'Basic',
          labelColumn1: '1 Column',
          labelColumn2: '2 Columns',
          labelColumn3: '3 Columns',
          labelColumn37: '2 Columns 3/7',
          labelText: 'Text',
          labelLink: 'Link',
          labelImage: 'Image',
          labelVideo: 'Video',
          labelMap: 'Map',

        },
        'grapesjs-plugin-export': {
          addExportBtn: true,
          btnLabel: 'Export to ZIP',
          filenamePfx: 'grapesjs_template',
          root: {
            css: {
              'style.css': ed => ed.getCss(),
            },


            'index.html': ed =>
              `<!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <link rel="stylesheet" href="./css/style.css">
            ${this.includescripts(ed)}
          </head>
          <body>${ed.getHtml()}</body>
        <html>`,
          }
        }
      },
      blockManager: {
        appendTo: '#blocks',
       
      }
    });

    let blockManager = editor.BlockManager;

    // 'my-first-block' is the ID of the block
    blockManager.add('grid', {
      category: 'Components',
      label: '<div class="tile"><img src="images/m_table.png" /></div>',

      content: {
        // script: function () {
        //   var script = document.createElement('script');
        //   script.src = 'https://hclo365-my.sharepoint.com/personal/velmurugan_su_hcl_com/Documents/main.js?e=4%3a680718ec2de5496ca6ac9df8bccf13ae&at=9';
        //   document.body.appendChild(script);

        // },
        attributes: { 'id': 'gridTable' },
        content: '<core-grid-datatypes apirequest={"handlerURL":"https://my-json-server.typicode.com/VelmuruganHCL/gridDemo/db"} tableconfig={"id":"materialsummary","theme":"blue"}></core-grid-datatypes>'
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
          label: 'Export',
          command: 'export-template',
          context: 'export-template' // For grouping context of buttons from the same panel
        }

      ]
    });


  }

  includescripts(ed) {
    console.log("reached");
    var temContent = ed.getHtml();
    var scriptToInclude = "";
    if (temContent.indexOf('gridTable') > -1) {
      console.log("reached2");
      scriptToInclude = scriptToInclude + '<script src="https://hclo365-my.sharepoint.com/personal/velmurugan_su_hcl_com/Documents/main.js?e=4%3a680718ec2de5496ca6ac9df8bccf13ae&at=9"/>\n';
    }
    if (temContent.indexOf('testComp') > -1) {
      scriptToInclude = scriptToInclude + '<script src="test component"/>\n';
    }
    if (temContent.indexOf('inputComp') > -1) {
      scriptToInclude = scriptToInclude + '<script src="input component"/>\n';
    }
    if (temContent.indexOf('textComp') > -1) {
      scriptToInclude = scriptToInclude + '<script src="text component"/>\n';
    }
    if (temContent.indexOf('secComp') > -1) {
      scriptToInclude = scriptToInclude + '<script src="section component"/>\n';
    }

    return scriptToInclude;
  }

}
