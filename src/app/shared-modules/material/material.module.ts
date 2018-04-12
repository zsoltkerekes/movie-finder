// import 'hammerjs';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatPaginatorModule,
    MatRadioModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
