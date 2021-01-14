import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'company-name-cell-renderer',
  template: `<a href="{{params.data.company_website}}" target="_blank">{{params.data.company_name}}</a>`,
})

export class CompanyNameCellRenderer implements ICellRendererAngularComp {
  public params;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }
}
