import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './duha29/navbar/navbar.component';
import { HomeComponent } from './duha29/home/home.component';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './duha29/service/service.component';
import { SubServicesComponent } from './duha29/sub-services/sub-services.component';
import { LectureComponent } from './duha29/lecture/lecture.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SubsecribtionComponent } from './duha29/subsecribtion/subsecribtion.component';
import { ServicesDetailsComponent } from './duha29/services-details/services-details.component';
import { RegistrationUserComponent } from './duha29/registration-user/registration-user.component';
import { LoginComponent } from './duha29/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    SubServicesComponent,
    LectureComponent,
    SubsecribtionComponent,
    ServicesDetailsComponent,
    RegistrationUserComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "services", component: ServiceComponent },
      { path: "SubServices/:id", component: SubServicesComponent },
      { path: "lecture", component: LectureComponent },
      { path: "batool/:id", component: SubsecribtionComponent },
      { path: "servicesDetails/:id", component: ServicesDetailsComponent },
      { path: "registration", component: RegistrationUserComponent },
      { path: "Login", component: LoginComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
