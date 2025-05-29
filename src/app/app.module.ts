import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {ListComponent} from './components/list/list.component';
import {DetailComponent} from './components/detail/detail.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonModule, MatMiniFabButton} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltip} from "@angular/material/tooltip";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {CardComponent} from './shared/components/card/card.component';
import {GridComponent} from './shared/components/grid/grid.component';
import {MatChip} from "@angular/material/chips";
import {
  MatAccordion, MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {FormatDatePipe} from "./shared/pipes/format-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CardComponent,
    GridComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTable,
    MatIcon,
    MatMiniFabButton,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatTooltip,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatGridList,
    MatGridTile,
    MatChip,
    MatAccordion,
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
