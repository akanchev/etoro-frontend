import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'detail-cell-renderer',
  template: `
    <div class="row">
      <div class="col-12 short-bio"><div [innerHTML]="params.data.short_bio"></div></div>
    </div>
    <div class="row">
      <div class="col-12 long-bio"><div [innerHTML]="params.data.long_bio"></div></div>
    </div>
  `,
  styles: [`
    .short-bio {
    }
    .long-bio {
      color: #666;
    }
  `]
})
export class DetailCellRenderer implements ICellRendererAngularComp {
  public params;

  agInit(params: any): void {
    this.params = params;

    console.log(this.params.data);
  }

  refresh(params: any): boolean {
    return false;
  }
}
