import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';

import { MatSidenavModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home.component';
import { BookingComponent } from './booking.component';
import { FeedbackComponent } from './feedback.component';
import { MoreinfoComponent } from './moreinfo.component';
import { TrackComponent } from './track.component';
import { DetailsComponent } from './details.component';
import { GetpostComponent } from './getpost.component';

import { PostsService } from './posts.service'; 

const routes: Routes = [
  { path: '', redirectTo: 'home1', pathMatch: 'full' },
  { path: 'home1', component: HomeComponent, data: { state: 'home1' }  },
  { path: 'booking', component: BookingComponent, data: { state: 'booking' } },
  { path: 'feedback', component: FeedbackComponent, data: { state: 'feedback' } },
  { path: 'moreinfo', component: MoreinfoComponent, data: { state: 'moreinfo' } },
  { path: 'track', component: TrackComponent, data: { state: 'track' } },
  { path: 'details', component: DetailsComponent, data: { state: 'details' } },
  { path: 'getpost/:nric', component: GetpostComponent, data: { state: 'getpost' } },
  { path: '**', redirectTo: 'home1', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    BookingComponent,
    FeedbackComponent,
    MoreinfoComponent,
    TrackComponent,
    DetailsComponent,
    GetpostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule, 
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule.forRoot(routes),     
    FormsModule, 
    HttpModule, 
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
