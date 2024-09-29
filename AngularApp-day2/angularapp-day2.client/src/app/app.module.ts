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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    SubServicesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "services", component: ServiceComponent },
      { path: "SubServices/:id", component: SubServicesComponent  }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
