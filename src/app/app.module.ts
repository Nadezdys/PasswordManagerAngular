import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassworddataComponent } from './passworddata/passworddata.component';
import { ShowDataComponent } from './passworddata/show-data/show-data.component';
import { AddEditDataComponent } from './passworddata/add-edit-data/add-edit-data.component';
import{SharedService} from './shared.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ClipboardModule } from 'ngx-clipboard';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartupComponent } from './startup/startup.component';
import { SettingsComponent } from './settings/settings.component';
import { ShowDetailDataComponent } from './passworddata/show-detail-data/show-detail-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PassworddataComponent,
    ShowDataComponent,
    AddEditDataComponent,
    LoginComponent,
    RegisterComponent,
    StartupComponent,
    SettingsComponent,
    ShowDetailDataComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
