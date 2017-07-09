import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component';
import { UsageComponent } from './usage/usage.component';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewClientComponent } from './overview/client/client.component';
import { OverviewServerComponent } from './overview/server/server.component';
import { MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdListModule, MdCardModule, MdMenuModule, MdCoreModule } from '@angular/material';
import { ClientComponent } from './settings/client/client.component';
import { ServerComponent } from './settings/server/server.component';
import { FeaturesComponent } from './features/features.component';
import { EnvironmentComponent } from './settings/environment/environment.component';
import { FrontComponent } from './features/front/front.component';
import { BackComponent } from './features/back/back.component';
import { FutureComponent } from './features/future/future.component';

/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

import { PrismComponent } from 'angular-prism';
const routes: Routes = [
  { path: '', component: InstallationComponent, data: { title: 'Installation' } },
  { path: 'overview/root', component: OverviewComponent, data: { title: 'Overview' } },
  { path: 'overview/client', component: OverviewClientComponent, data: { title: 'Client' } },
  { path: 'overview/server', component: OverviewServerComponent, data: { title: 'Server' } },
  { path: 'settings/environment', component: EnvironmentComponent, data: { title: 'Environment' } },
  { path: 'settings/client', component: ClientComponent, data: { title: 'Client' } },
  { path: 'settings/server', component: ServerComponent, data: { title: 'Server' } },
  { path: 'usage/use', component: UsageComponent, data: { title: 'Usage' } },
  { path: 'features/new', component: FeaturesComponent, data: { title: 'Features' } },
  { path: 'features/front', component: FrontComponent, data: { title: 'Features: Front Office' } },
  { path: 'features/back', component: BackComponent, data: { title: 'Features: Back Office' } },
  { path: 'features/future', component: FutureComponent, data: { title: 'Features: Future' } },
];

@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent,
    UsageComponent,
    SettingsComponent,
    OverviewComponent,
    OverviewClientComponent,
    OverviewServerComponent,
    ClientComponent,
    ServerComponent,
    FeaturesComponent,
    EnvironmentComponent,
    FrontComponent,
    BackComponent,
    FutureComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdListModule, MdCardModule, MdMenuModule, MdCoreModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
