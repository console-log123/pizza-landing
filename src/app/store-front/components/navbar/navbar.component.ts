import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: "app-front-navbar",
  imports:[ RouterLink, RouterLinkActive],
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}