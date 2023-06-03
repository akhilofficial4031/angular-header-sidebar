import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,

    MatTooltipModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class SharedModule { }
