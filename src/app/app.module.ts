import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BenvenutoPageComponent } from './pages/benvenuto-page/benvenuto-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BenvenutoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
