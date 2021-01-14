import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'logo-cell-renderer',
  template: `
    <a href="https://www.etoro.com/markets/{{params.data.symbol_full}}" target="_blank"><img src="{{params.data.logo}}" style="width:35px; height:35px;"></a>`,
})

export class LogoCellRenderer implements ICellRendererAngularComp {
  public params;

  agInit(params: any): void {
    this.params = params;

    console.log(params);
  }

  refresh(params: any): boolean {
    return false;
  }
}
