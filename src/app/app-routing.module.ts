import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";

import { ProfileComponent } from "./profile/profile.component";
import { MainComponent } from "./main/main.component";
import { ResourcesComponent } from "./resources/resources.component";

const routes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'main', component: MainComponent, children: [
        {path: 'resources', component: ResourcesComponent}
    ]},
  
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}