import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EndpointsComponent } from './components/endpoints/endpoints.component';
import { TokenComponent } from './components/token/token.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { JsonstoreService } from './services/jsonstore.service';

@NgModule({
  declarations: [
    AppComponent,
    EndpointsComponent,
    TokenComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [JsonstoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
