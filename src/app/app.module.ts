import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeImgComponent } from './home-img/home-img.component';
import { JwtInterceptor } from './jwt.interceptor';
import { MainComponent } from './main/main.component';
import { httpInterceptorProviders } from './http.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { ResourcesComponent } from './resources/resources.component';
import { SpecialistsComponent } from './specialists/specialists.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    FavoritesComponent,
    HomeComponent,
    HeaderComponent,
    HomeImgComponent,
    MainComponent,
    ResourcesComponent,
    SpecialistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
