import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RedBlackDirective } from './directives/red-black.directive';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RedBlackDirective,
    UsdInrPipe,
    ReverseStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
