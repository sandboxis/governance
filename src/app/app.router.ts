import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { OverviewComponent, ResourcesComponent, ProposalComponent, Transition2017Component, Transition2014Component, SectionComponent, GovernanceComponent, LegalComponent, CommunityComponent } from './section';

const routes: Route[] = [
  { path: '', component: SectionComponent, children:
    [
      { path: 'governance', component: GovernanceComponent },
      { path: 'legal', component: LegalComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'transition-2017', component: Transition2017Component },
      { path: 'transition-2014', component: Transition2014Component },
      { path: 'proposal', component: ProposalComponent },
      { path: '', component: OverviewComponent, pathMatch: 'full' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes
);
