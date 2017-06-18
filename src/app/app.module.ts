import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SectionComponent, OverviewComponent } from './section';
import { ProposalComponent } from './section/proposal/proposal.component';
import { GovernanceComponent } from './section/governance/governance.component';
import { LegalComponent } from './section/legal/legal.component';
import { SubheaderComponent } from './shared/subheader/subheader.component';
import { CommunityComponent } from './section/community/community.component';
import { TransitionComponent } from './section/transition/transition.component';
import { Transition2017Component } from './section/transition/transition-2017/transition-2017.component';
import { Transition2014Component } from './section/transition/transition-2014/transition-2014.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SectionComponent,
    OverviewComponent,
    ProposalComponent,
    GovernanceComponent,
    LegalComponent,
    SubheaderComponent,
    CommunityComponent,
    TransitionComponent,
    Transition2017Component,
    Transition2014Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
