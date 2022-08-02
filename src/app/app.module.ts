import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputVisitorDetailsComponent } from './input-visitor-details/input-visitor-details.component';
import { RequestQueueNumberComponent } from './request-queue-number/request-queue-number.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './tools/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input"
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputVisitorDetailsComponent,
    RequestQueueNumberComponent,
    VisitorListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    NgxBarcodeModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
