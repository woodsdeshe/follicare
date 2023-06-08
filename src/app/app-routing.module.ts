import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { ResourcesComponent } from "./resources/resources.component";
import { HomeComponent } from "./home/home.component";
import { SpecialistsComponent } from "./specialists/specialists.component";

const routes: Routes = [
  /**
   * Root path route.
   * Redirects to the HomeComponent as the default landing page.
   */
  { path: '', component: HomeComponent },

  /**
   * Main component route.
   * Contains child routes for resources and specialists.
   */
  {
    path: 'main',
    component: MainComponent,
    children: [
      /**
       * Resources route.
       * Renders the ResourcesComponent and sets the title data.
       */
      { path: 'resources', component: ResourcesComponent, data: { title: 'Resources' } },

      /**
       * Specialists route.
       * Renders the SpecialistsComponent and sets the title data.
       */
      { path: 'specialists', component: SpecialistsComponent, data: { title: 'Specialists' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
