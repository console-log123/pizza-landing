import { Component } from "@angular/core";
import { HeroComponent } from "../../components/hero/hero.component";



@Component({
  selector: "app-home-page",
  imports: [HeroComponent],
  templateUrl: "./home-page.component.html"
})
export class HomePageComponent{}