import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { AdsComponent } from './ads/ads.component';
import { AddAdComponent } from './add-ad/add-ad.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FormsModule} from '@angular/forms';
import { NgxDatePickerModule } from '@ngx-tiny/date-picker';
import { NgxTimePickerModule } from '@ngx-tiny/time-picker';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    HeaderComponent,
    AdsComponent,
    AddAdComponent
  ],
  imports: [
    BrowserModule,
    // in add post
    EditorModule,NgxDatePickerModule,NgxTimePickerModule,
    // end
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
