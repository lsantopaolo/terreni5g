import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RotteModule } from './rotte.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { AuthService } from './services/auth.service';
import { ListaSrComponent } from './lista-sr/lista-sr.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RotteModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, NavigatorComponent,ListaSrComponent ],
  providers:    [AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
