
import { MainComponent } from "./main.component"
import { ResourcesComponent } from "../resources/resources.component"
import { RouterModule, Routes}  from "@angular/router"
import { NgModule} from "@angular/core";
import { FavoritesComponent } from "../favorites/favorites.component";
import { ProfileComponent } from "../profile/profile.component";

const mainRoutes: Routes = [
    {path: 'main', component: MainComponent, children: [
        {path: 'resources', component: ResourcesComponent},
        {path: 'favorites', component: FavoritesComponent},
        {path: 'profile', component: ProfileComponent}
    ]},
  
]

@NgModule({
    imports: [RouterModule.forRoot(mainRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}