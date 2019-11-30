import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InputComponent} from './input/input.component';
import {OutputComponent} from './output/output.component';
import {FooterComponent} from './footer/footer.component';
import {StudentDataService} from './student-data.service';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
