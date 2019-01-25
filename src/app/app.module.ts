import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from "ngx-accordion";


import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DataWrapperService } from './shared/data-wrapper.service';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    EditComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    HttpClientModule,
    routing
  ],
  providers: [DataWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
