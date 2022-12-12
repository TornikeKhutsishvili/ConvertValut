import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
// import { ConvertInputComponent } from './convert-input/convert-input.component';
import { ConvertSelectComponent } from './convert-select/convert-select.component';

@NgModule({
  declarations: [
    AppComponent,
    // ConvertInputComponent,
    ConvertSelectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
