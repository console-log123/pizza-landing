import { Component, effect, input, signal } from "@angular/core";
import { RouterModule } from "@angular/router";


@Component({
  selector: "app-hero",
  imports:[ RouterModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent {
  title = input.required<string>();
  subtitle = input.required<string>();

  description = input('Auténtico sabor italiano, ingredientes frescos y un ambiente acogedor.');
  buttonText = input('Ver Menú');
  buttonLink = input('/menu');
  backgroundImage = input('https://res.cloudinary.com/dv7wctcfp/image/upload/v1721882567/La%20Pizzata/ndzijjmrfclrnwylqfzm.png');

  isMobile = signal(false);
  isScrolled = signal(false);

  constructor() {
    // Efecto para manejar la responsividad
    effect((onCleanup) => {
      const checkViewport = () => {
        if (typeof window !== 'undefined') {
          this.isMobile.set(window.innerWidth < 768);
        }
      };

      
      checkViewport();

      // Cmabios de tamaño
      window.addEventListener('resize', checkViewport);

      // Limpieza
      onCleanup(() => {
        window.removeEventListener('resize', checkViewport);
      });
    });

    // Scroll
    effect((onCleanup) => {
      const handleScroll = () => {
        this.isScrolled.set(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);

      onCleanup(() => {
        window.removeEventListener('scroll', handleScroll);
      });
    });
  }

}