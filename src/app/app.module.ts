import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InstallandConfigureComponent } from './installand-configure/installand-configure.component';
import { ConfgureRolesFeaturesComponent } from './confgure-roles-features/confgure-roles-features.component';
import { HyperVComponent } from './hyper-v/hyper-v.component';
import { NetworkingComponent } from './networking/networking.component';
import { ActiveDirectoryComponent } from './active-directory/active-directory.component';
import { ManageGroupPolicyComponent } from './manage-group-policy/manage-group-policy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InstallandConfigureComponent,
    ConfgureRolesFeaturesComponent,
    HyperVComponent,
    NetworkingComponent,
    ActiveDirectoryComponent,
    ManageGroupPolicyComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
