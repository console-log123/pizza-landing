import { Routes } from "@angular/router";
import { StoreFrontLayoutComponent } from "./layouts/store-front-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";



export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayoutComponent,
    children:[
      {
        path:'',
        component:HomePageComponent
      }
    ]
  }

]

export default storeFrontRoutes;