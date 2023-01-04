import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
=======
>>>>>>> aaf3d5e1d40aab28c91aaf7c11560a0903ffb603

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
<<<<<<< HEAD
    MatListModule,
    MatCardModule,
=======
>>>>>>> aaf3d5e1d40aab28c91aaf7c11560a0903ffb603
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
