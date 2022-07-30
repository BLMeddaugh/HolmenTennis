import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { OtherTennisComponent } from './other-tennis/other-tennis.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'other', component: OtherTennisComponent}
  //** ideas: "Benefits of tennis", "pillars", "In The News", "resources (youtube?), Media/pictures" */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
