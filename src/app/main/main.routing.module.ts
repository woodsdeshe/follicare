import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SpecialistsComponent } from '../specialists/specialists.component';
import { ResourcesComponent } from '../resources/resources.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'specialists', component: SpecialistsComponent },
      { path: 'resources', component: ResourcesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
