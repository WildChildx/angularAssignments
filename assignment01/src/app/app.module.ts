// this is the root module and the entry point of the application 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  // these are basically the component that are present in the app
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // this is basically the bootstrap component that is fired on the start of the application
  bootstrap: [AppComponent]
})

export class AppModule { }
