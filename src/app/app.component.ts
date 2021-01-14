import { Component } from '@angular/core';
import data from '../assets/data.json';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';

import { DetailCellRenderer } from './components/ag-grid/detail-cell-renderer.component';
import { LogoCellRenderer } from './components/ag-grid/logo-cell-renderer.component';
import { CompanyNameCellRenderer } from './components/ag-grid/company-name-cell-renderer.component';

import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Experiment App';

  public modules: Module[] = [MenuModule, MasterDetailModule];

  private defaultColDef;
  private columnDefs = [];
  private rowData = [];
  private frameworkComponents;
  private sideBar;
  private detailCellRenderer = 'myDetailCellRenderer';
  private rowClassRules;

  constructor() {
    this.sideBar = {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
        },
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
        },
      ],
      defaultToolPanel: 'columns',
    };

    this.frameworkComponents = { myDetailCellRenderer: DetailCellRenderer, logoCellRenderer: LogoCellRenderer, companyNameCellRenderer: CompanyNameCellRenderer };

    this.rowClassRules = {
      'invested-in-instrument': function (params) {

        console.log(params);
        return params.data.invested === 1;
      }
    };

    this.defaultColDef = {
      flex: 1,
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
      suppressMenu: true
    };

    for (const property in data[0]) {
        this.columnDefs.push({
          field: property,
          headerName: data[0][property].name,
          filter: data[0][property].filter === undefined ? true : data[0][property].filter,
          cellRenderer: data[0][property].cellRenderer === undefined ? '' : data[0][property].cellRenderer,
          width: data[0][property].width === undefined ? null : data[0][property].width,
          minWidth: data[0][property].minWidth === undefined ? null : data[0][property].minWidth,
          maxWidth: data[0][property].maxWidth === undefined ? null : data[0][property].maxWidth,
          sortable: data[0][property].sortable === undefined ? true : data[0][property].sortable,
          resizable: data[0][property].resizable === undefined ? true : data[0][property].resizable,
          floatingFilter: data[0][property].floatingFilter === undefined ? true : data[0][property].floatingFilter,
          hide: data[0][property].status === 1 ? false : true,
        });
    }

    for (const key in data) {
      const record = [];
      for (const objectProperty in data[key]) {
        record[objectProperty] = data[key][objectProperty].value;
      }

      this.rowData.push(record);
    }
  }
}
