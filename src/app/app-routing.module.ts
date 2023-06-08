import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { ResourcesComponent } from "./resources/resources.component";
import { HomeComponent } from "./home/home.component";
import { SpecialistsComponent } from "./specialists/specialists.component";

const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'main', component: MainComponent, children: [
        {path: 'resources', component: ResourcesComponent, data: { title: 'Resources' }},
        {path: 'specialists', component: SpecialistsComponent,  data: { title: 'Specialists' }}
    ]},
  
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}