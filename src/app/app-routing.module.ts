import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";

import { ProfileComponent } from "./profile/profile.component";
import { MainComponent } from "./main/main.component";
import { ResourcesComponent } from "./resources/resources.component";
import { HomeComponent } from "./home/home.component";
import { SpecialistsComponent } from "./specialists/specialists.component";

const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'main', component: MainComponent, children: [
        {path: 'resources', component: ResourcesComponent},
        {path: 'specialists', component: SpecialistsComponent},
    ]},
  
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}