
import { MainComponent } from "./main.component"
import { ResourcesComponent } from "../resources/resources.component"
import { RouterModule, Routes}  from "@angular/router"
import { NgModule} from "@angular/core";

const mainRoutes: Routes = [
    {path: 'main', component: MainComponent, children: [
        {path: 'resources', component: ResourcesComponent}
    ]},
  
]

@NgModule({
    imports: [RouterModule.forRoot(mainRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}