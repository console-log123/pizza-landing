import { Component, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LoginComponent } from "../../../auth/login/login.component";
import { CommonModule } from "@angular/common";


@Component({
  selector: "app-front-navbar",
  imports: [RouterLink, RouterLinkActive,LoginComponent, CommonModule],
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent {
isMenuOpen = false;
  showLoginSignal = signal(false);

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLogin() {
    this.showLoginSignal.set(!this.showLoginSignal());
  }

  showLogin() {
    return this.showLoginSignal();
  }

  closeLogin() {
    this.showLoginSignal.set(false);
  }
}