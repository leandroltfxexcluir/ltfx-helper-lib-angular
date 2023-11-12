import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LtfxHelperModule } from 'projects/ltfx-helper/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    LtfxHelperModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
