import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import 'ag-grid-enterprise';
import { DetailCellRenderer } from './components/ag-grid/detail-cell-renderer.component';
import { LogoCellRenderer } from './components/ag-grid/logo-cell-renderer.component';
import { CompanyNameCellRenderer } from './components/ag-grid/company-name-cell-renderer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DetailCellRenderer,
    LogoCellRenderer
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
      DetailCellRenderer,
      LogoCellRenderer,
      CompanyNameCellRenderer
    ]),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
