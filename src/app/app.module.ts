import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component';
import { UsageComponent } from './usage/usage.component';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './overview/overview.component';
import { MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdListModule, MdCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent,
    UsageComponent,
    SettingsComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdListModule, MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
