import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { OtherTennisComponent } from './other-tennis/other-tennis.component';
import { MediaComponent } from './media/media.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ScheduleComponent,
    AboutComponent,
    FaqComponent,
    OtherTennisComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
