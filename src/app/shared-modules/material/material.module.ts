import 'hammerjs';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    MatSlideToggleModule
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
    MatSlideToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
