import { Component } from "@angular/core";
import { HeroComponent } from "../../components/hero/hero.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { SpecialOffersComponent } from "../../components/offers/offers.component";
import { ReservationComponent } from "../../components/reservation/reservation.component";



@Component({
  selector: "app-home-page",
  imports: [HeroComponent, MenuComponent, SpecialOffersComponent, ReservationComponent],
  templateUrl: "./home-page.component.html"
})
export class HomePageComponent { }