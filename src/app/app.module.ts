import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthServService } from './auth-serv.service';
import { NgxSpinnerModule } from 'ngx-spinner';
const rout=[
  {
    path:"share",
    component:SecondComponent
  }
]

let socialloginproviders={
  "facebook":{
    "clientId":"1987589354884403",
    "apiVersion":"v2.11"
  },
  "google":{
    "clientId":"812463822409-p4st7pkjthlguesdb8nrbdc84ipuk94j.apps.googleusercontent.com",
    "clientSecret":"RU8QYsb16Sa51eHuOlx4AaaP"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
    Angular2SocialLoginModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [AuthServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(socialloginproviders);
