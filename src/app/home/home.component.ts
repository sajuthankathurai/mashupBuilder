import { Component, OnInit } from '@angular/core';
import 'hcl-ers-edge-responsive-table-master/src/core-grid-datatypes/core-grid-datatypes.js';
declare global {
  interface Window { Highcharts: any; }
  }
  
  import Highcharts from 'highcharts/highstock';
  window.Highcharts = Highcharts; //this line did the magic
import 'test/src/core-chart-datatypes/core-chart-datatypes.js'

declare var grapesjs: any; // Important!
import basicBlocksPlugin from 'grapesjs-blocks-basic';
import exportPlugin from 'grapesjs-plugin-export';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
  public apirequest: any;
  public tableconfig: any;
  public chartconfig: any;

  constructor() {
   
  }

  ngOnInit() {

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

      plugins: [basicBlocksPlugin, exportPlugin],
      pluginsOpts: {
        [basicBlocksPlugin]: {
          blocks: ['column1', 'column2', 'column3','column4'],
          flexGrid: 0,
          stylePrefix: 'gjs-',
          addBasicStyle: true,
          category: 'Basic',
          labelColumn1: '1 Column',
          labelColumn2: '2 Columns',
          labelColumn3: '3 Columns',
          labelColumn4: '4 Columns'
        },
        [exportPlugin]: {
          addExportBtn: true,
          btnLabel: 'Export to ZIP',
          filenamePfx: 'grapesjs_templateCode',
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
                ${this.includeScripts(ed)}                
              </head>
              <body>${ed.getHtml()}</body>
            <html>`,
          }
        }
      },
      blockManager: {
        appendTo: '#blocks',

      },
      chartManager: {
        appendTo: '#blocks',

      }
    });

    
    let blockManager = editor.BlockManager;
    let chartManager = editor.BlockManager;

    chartManager.add('multiColumnGrid', {
      category: 'Basic',
      label: '<div class="tile"><img src="images/mashup-builder_09.gif" /></div>',
      content: {
        attributes: { 'id': 'multiColumn' },
        content:'<div class="gjs-row"><div class="gjs-cell"></div><div class="gjs-cell"></div></div>'
      }
      /*toAdd('column2') && bm.add('column2', {
        label: c.labelColumn2,
        attributes: {class:'gjs-fonts gjs-f-b2'},
        category: c.category,
        content: `<div ${attrsRow}>
            <div ${attrsCell}></div>
            <div ${attrsCell}></div>
          </div>
          ${ basicStyle ?
            `<style>
              ${styleRow}
              ${styleClm}
            </style>`
            : ''}`
      });*/
    });

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

   chartManager.add('barchart', {
      category: 'Components',
      label: '<div class="tile"><img src="images/mashup-builder_20.gif" /></div>',
      content: {
        attributes: { 'id': 'barCharts' },
        content:'<core-chart-datatypes apirequest=\'{"handlerURL":"https://mockable.azurewebsites.net/api/chart"}\' chartconfig=\'{"showTotal":true,"tooltipFormat":"NameAndValue","responsive":true,"uniqueId":"uniqueId","colors":["#DB8F25","#d4534c","#7ec6bb","#999","#5cdff4","#ffa519","#c42525","#19a7a7","#a6c96a"],"exporting":{"enabled":false},"chart":{"events":{"clickEventEnabled":false,"clickEventName":"chartClickEvent","clickEventUniqueId":"chart_1"}},"title":{"text":"Parent App chart title","enabled":true,"align":"center","verticalAlign":"","style":{"fontSize":"18px","fontStyle":"normal","fontFamily":"Arial, Helvetica, sans-serif"}},"subtitle":{"text":"Parent App chart subtitle","align":"center","verticalAlign":"","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"legend":{"align":"right","backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"verticalAlign":"middle","itemMarginTop":2,"itemMarginBottom":2,"itemStyle":{"color":"#666666","fontSize":"12px","fontWeight":"normal","fontFamily":"Arial, Helvetica, sans-serif"},"data":{"enabled":false}},"tooltip":{"backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"enabled":true,"followPointer":false,"style":{"color":"contrast","fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"plotOptions":{"series":{"pointPadding":0.4,"clickEventEnabled":false,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","dataLabels":{"enabled":false,"borderRadius":1,"style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"borderWidth":1,"borderColor":"#FFFFFF","showInLegend":true}},"xAxis":{"gridLineWidth":1,"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"xAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"scrollbar":{"enabled":true}},"yAxis":{"gridLineWidth":1,"stackLabels":{"enabled":false},"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"yAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}}},"targetBox":{"clickEventEnabled":true,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","text":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"black"}},"aboveTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}},"belowTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}}}}\' charttype="bar"></core-chart-datatypes>'
      }
    });

    chartManager.add('columnchart', {
      category: 'Components',
      label: '<div class="tile"><img src="images/mashup-builder_17.gif" /></div>',
      content: {
        attributes: { 'id': 'columnCharts' },
        content:'<core-chart-datatypes apirequest=\'{"handlerURL":"https://mockable.azurewebsites.net/api/chart"}\' chartconfig=\'{"showTotal":true,"tooltipFormat":"NameAndValue","responsive":true,"uniqueId":"uniqueId","colors":["#DB8F25","#d4534c","#7ec6bb","#999","#5cdff4","#ffa519","#c42525","#19a7a7","#a6c96a"],"exporting":{"enabled":false},"chart":{"events":{"clickEventEnabled":false,"clickEventName":"chartClickEvent","clickEventUniqueId":"chart_1"}},"title":{"text":"Parent App chart title","enabled":true,"align":"center","verticalAlign":"","style":{"fontSize":"18px","fontStyle":"normal","fontFamily":"Arial, Helvetica, sans-serif"}},"subtitle":{"text":"Parent App chart subtitle","align":"center","verticalAlign":"","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"legend":{"align":"right","backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"verticalAlign":"middle","itemMarginTop":2,"itemMarginBottom":2,"itemStyle":{"color":"#666666","fontSize":"12px","fontWeight":"normal","fontFamily":"Arial, Helvetica, sans-serif"},"data":{"enabled":false}},"tooltip":{"backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"enabled":true,"followPointer":false,"style":{"color":"contrast","fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"plotOptions":{"series":{"pointPadding":0.4,"clickEventEnabled":false,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","dataLabels":{"enabled":false,"borderRadius":1,"style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"borderWidth":1,"borderColor":"#FFFFFF","showInLegend":true}},"xAxis":{"gridLineWidth":1,"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"xAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"scrollbar":{"enabled":true}},"yAxis":{"gridLineWidth":1,"stackLabels":{"enabled":false},"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"yAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}}},"targetBox":{"clickEventEnabled":true,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","text":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"black"}},"aboveTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}},"belowTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}}}}\' charttype="column"></core-chart-datatypes>'
      }
    });

    /*chartManager.add('linechart', {
      category: 'Components',
      label: '<div class="tile"><img src="images/mashup-builder_19.gif" /></div>',
      content: {
        attributes: { 'id': 'lineCharts' },
        content:'<core-chart-datatypes apirequest=\'{"handlerURL":"https://mockable.azurewebsites.net/api/chart"}\' chartconfig=\'{"showTotal":true,"tooltipFormat":"NameAndValue","responsive":true,"uniqueId":"uniqueId","colors":["#DB8F25","#d4534c","#7ec6bb","#999","#5cdff4","#ffa519","#c42525","#19a7a7","#a6c96a"],"exporting":{"enabled":false},"chart":{"events":{"clickEventEnabled":false,"clickEventName":"chartClickEvent","clickEventUniqueId":"chart_1"}},"title":{"text":"Parent App chart title","enabled":true,"align":"center","verticalAlign":"","style":{"fontSize":"18px","fontStyle":"normal","fontFamily":"Arial, Helvetica, sans-serif"}},"subtitle":{"text":"Parent App chart subtitle","align":"center","verticalAlign":"","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"legend":{"align":"right","backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"verticalAlign":"middle","itemMarginTop":2,"itemMarginBottom":2,"itemStyle":{"color":"#666666","fontSize":"12px","fontWeight":"normal","fontFamily":"Arial, Helvetica, sans-serif"},"data":{"enabled":false}},"tooltip":{"backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"enabled":true,"followPointer":false,"style":{"color":"contrast","fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"plotOptions":{"series":{"pointPadding":0.4,"clickEventEnabled":false,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","dataLabels":{"enabled":false,"borderRadius":1,"style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"borderWidth":1,"borderColor":"#FFFFFF","showInLegend":true}},"xAxis":{"gridLineWidth":1,"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"xAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"scrollbar":{"enabled":true}},"yAxis":{"gridLineWidth":1,"stackLabels":{"enabled":false},"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"yAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}}},"targetBox":{"clickEventEnabled":true,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","text":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"black"}},"aboveTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}},"belowTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}}}}\' charttype="line"></core-chart-datatypes>'
      }
    });*/

    chartManager.add('piechart', {
      category: 'Components',
      label: '<div class="tile"><img src="images/mashup-builder_18.gif" /></div>',
      content: {
        attributes: { 'id': 'pieCharts' },
        content:'<core-chart-datatypes apirequest=\'{"handlerURL":"https://mockable.azurewebsites.net/api/chart"}\' chartconfig=\'{"showTotal":true,"tooltipFormat":"NameAndValue","responsive":true,"uniqueId":"uniqueId","colors":["#DB8F25","#d4534c","#7ec6bb","#999","#5cdff4","#ffa519","#c42525","#19a7a7","#a6c96a"],"exporting":{"enabled":false},"chart":{"events":{"clickEventEnabled":false,"clickEventName":"chartClickEvent","clickEventUniqueId":"chart_1"}},"title":{"text":"Parent App chart title","enabled":true,"align":"center","verticalAlign":"","style":{"fontSize":"18px","fontStyle":"normal","fontFamily":"Arial, Helvetica, sans-serif"}},"subtitle":{"text":"Parent App chart subtitle","align":"center","verticalAlign":"","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"legend":{"align":"right","backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"verticalAlign":"middle","itemMarginTop":2,"itemMarginBottom":2,"itemStyle":{"color":"#666666","fontSize":"12px","fontWeight":"normal","fontFamily":"Arial, Helvetica, sans-serif"},"data":{"enabled":false}},"tooltip":{"backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"enabled":true,"followPointer":false,"style":{"color":"contrast","fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"plotOptions":{"series":{"pointPadding":0.4,"clickEventEnabled":false,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","dataLabels":{"enabled":false,"borderRadius":1,"style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"borderWidth":1,"borderColor":"#FFFFFF","showInLegend":true}},"xAxis":{"gridLineWidth":1,"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"xAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"scrollbar":{"enabled":true}},"yAxis":{"gridLineWidth":1,"stackLabels":{"enabled":false},"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"yAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}}},"targetBox":{"clickEventEnabled":true,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","text":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"black"}},"aboveTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}},"belowTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}}}}\' charttype="pie"></core-chart-datatypes>'
      }
    });

    chartManager.add('donutchart', {
      category: 'Components',
      label: '<div class="tile"><img src="images/donut_image.png" /></div>',
      content: {
        attributes: { 'id': 'donutCharts' },
        content:'<core-chart-datatypes apirequest=\'{"handlerURL":"https://mockable.azurewebsites.net/api/chart"}\' chartconfig=\'{"showTotal":true,"tooltipFormat":"NameAndValue","responsive":true,"uniqueId":"uniqueId","colors":["#DB8F25","#d4534c","#7ec6bb","#999","#5cdff4","#ffa519","#c42525","#19a7a7","#a6c96a"],"exporting":{"enabled":false},"chart":{"events":{"clickEventEnabled":false,"clickEventName":"chartClickEvent","clickEventUniqueId":"chart_1"}},"title":{"text":"Parent App chart title","enabled":true,"align":"center","verticalAlign":"","style":{"fontSize":"18px","fontStyle":"normal","fontFamily":"Arial, Helvetica, sans-serif"}},"subtitle":{"text":"Parent App chart subtitle","align":"center","verticalAlign":"","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"legend":{"align":"right","backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"verticalAlign":"middle","itemMarginTop":2,"itemMarginBottom":2,"itemStyle":{"color":"#666666","fontSize":"12px","fontWeight":"normal","fontFamily":"Arial, Helvetica, sans-serif"},"data":{"enabled":false}},"tooltip":{"backgroundColor":"#FFFFFF","borderColor":"#CCCCCC","borderRadius":5,"borderWidth":1,"enabled":true,"followPointer":false,"style":{"color":"contrast","fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"plotOptions":{"series":{"pointPadding":0.4,"clickEventEnabled":false,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","dataLabels":{"enabled":false,"borderRadius":1,"style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"borderWidth":1,"borderColor":"#FFFFFF","showInLegend":true}},"xAxis":{"gridLineWidth":1,"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"xAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}},"scrollbar":{"enabled":true}},"yAxis":{"gridLineWidth":1,"stackLabels":{"enabled":false},"labels":{"enabled":true,"events":{"clickEventEnabled":false,"clickEventName":"yAxisLabelClickEvent","clickEventUniqueId":"chart_1"},"align":"center","style":{"fontSize":"11px","fontFamily":"Arial, Helvetica, sans-serif"}},"title":{"enabled":true,"align":"middle","style":{"fontSize":"14px","fontFamily":"Arial, Helvetica, sans-serif"}}},"targetBox":{"clickEventEnabled":true,"clickEventName":"seriesClickEvent","clickEventUniqueId":"chart_1","text":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"black"}},"aboveTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}},"belowTarget":{"style":{"font-size":"14px","font-family":"Arial, Helvetica, sans-serif","color":"#d3650a"}}}}\' charttype="donut"></core-chart-datatypes>'
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
          //label: 'Export',
          command: 'export-template',
          context: 'export-template' // For grouping context of buttons from the same panel
        }

      ]
    });
  }
    includeScripts(ed) {
      var temContent = ed.getHtml();
      var scriptToInclude = "";
      if (temContent.indexOf('gridTable') > -1) {
        scriptToInclude = scriptToInclude + '<script src="https://hclo365-my.sharepoint.com/personal/velmurugan_su_hcl_com/Documents/main.js?e=4%3a680718ec2de5496ca6ac9df8bccf13ae&at=9"/>\n' + '<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.7/custom-elements-es5-adapter.js"/>\n';
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
