import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component';
import { UsageComponent } from './usage/usage.component';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './overview/overview.component';
import { MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdListModule, MdCardModule, MdMenuModule } from '@angular/material';

/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

import { PrismComponent } from 'angular-prism';
import { ClientComponent } from './settings/client/client.component';
import { ServerComponent } from './settings/server/server.component';
import { FeaturesComponent } from './usage/features/features.component';
import { EnvironmentComponent } from './settings/environment/environment.component';

const routes: Routes = [
  { path: '', component: InstallationComponent, data: { title: 'Installation' } },
  { path: 'overview', component: OverviewComponent, data: { title: 'Checkout' } },
  { path: 'settings/environment', component: EnvironmentComponent, data: { title: 'Environment' } },
  { path: 'settings/client', component: ClientComponent, data: { title: 'Client' } },
  { path: 'settings/server', component: ServerComponent, data: { title: 'Server' } },
  { path: 'usage', component: UsageComponent, data: { title: 'Usage' } },
];

@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent,
    UsageComponent,
    SettingsComponent,
    OverviewComponent,
    PrismComponent,
    ClientComponent,
    ServerComponent,
    FeaturesComponent,
    EnvironmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdListModule, MdCardModule, MdMenuModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
