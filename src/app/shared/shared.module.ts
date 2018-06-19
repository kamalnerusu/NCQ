import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { AsidebarComponent } from './component/asidebar/asidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AsidebarComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ], exports: [
    AsidebarComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
