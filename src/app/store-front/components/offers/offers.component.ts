import { Component, signal } from "@angular/core";



@Component({
    selector: 'app-special-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css']

})
export class SpecialOffersComponent {

    isScrolled = signal(false)
    isMobile = signal(false)

    // Ofertas especiales
    offers = signal([
        {
            id: 1,
            title: '2x1 Martes',
            description: 'Todos los martes lleva 2 pizzas al precio de 1',
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721882587/La%20Pizzata/wzutgtacnuogafqnze50.png'
        },
        {
            id: 2,
            title: 'Combo Familiar',
            description: '2 pizzas grandes + bebidas + postre',
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721882587/La%20Pizzata/wzutgtacnuogafqnze50.png'
        },
        {
            id: 3,
            title: 'Happy Hour',
            description: 'Descuentos especiales de 4pm a 7pm',
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721882587/La%20Pizzata/wzutgtacnuogafqnze50.png'
        }
    ]);

    constructor() {
        // Verificar el viewport al inicio
        this.checkViewport();

        // Escuchar eventos de scroll y resize
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => this.handleScroll());
            window.addEventListener('resize', () => this.checkViewport());
        }
    }

    private checkViewport() {
        this.isMobile.set(window.innerWidth < 1024);
    }

    private handleScroll() {
        this.isScrolled.set(window.scrollY > 100);
    }
}