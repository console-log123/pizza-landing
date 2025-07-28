import { Component, computed, Signal, signal, ElementRef, Renderer2 } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Pizza } from "./interfaces/product";
import { CartService } from "../cart/services/cart.service";
import { CartComponent } from "../cart/cart.component";


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    imports: [RouterModule, CartComponent]
})
export class MenuComponent {

    activeCategory = signal<string>('classic');

    menuItems = signal<Pizza[]>([
        {
            id: 1,
            name: 'Pepperoni',
            description: 'Pepperoni, mozzarella, salsa de tomate',
            price: 12000,
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721923483/La%20Pizzata/eyqkycnukmxaloznsqf6.png',
            category: 'classic'
        },
        {
            id: 2,
            name: 'Vegetariana',
            description: 'Pimientos, champiñones, cebolla, aceitunas',
            price: 11000,
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721923485/La%20Pizzata/huoddo4vdzskmj0ndxg8.png',
            category: 'vegetarian'
        },
        {
            id: 3,
            name: 'Hawaiana',
            description: 'Jamón, piña, cebolla, mozzarella',
            price: 10000,
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721923489/La%20Pizzata/rmr4o2y4ealyoowjlrc3.png',
            category: 'specialty'
        },
        {
            id: 4,
            name: 'Mixta',
            description: 'Vegetales y Carnes, mozzarella y salsa pesto',
            price: 12000,
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721923481/La%20Pizzata/estrlfmi5klx4chntud9.png',
            category: 'specialty'
        },
        {
            id: 5,
            name: 'Pollo',
            description: 'Pollo, Pimientos, cebolla, albahaca',
            price: 11000,
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721923484/La%20Pizzata/s0nreiej2ymxefu0rf7l.png',
            category: 'classic'
        },
        {
            id: 6,
            name: '4 Quesos',
            description: 'Queso mozzarella, queso bufala, queso parmesano, queso azul',
            price: 10000,
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721923485/La%20Pizzata/enuzlgfihyfgymahsnte.png',
            category: 'vegetarian'
        }
    ]);

    // Computar las pizzas filtradas
    filteredPizzas: Signal<Pizza[]> = computed(() => {
        if (this.activeCategory() === 'all') {
            return this.menuItems();
        }
        return this.menuItems().filter(pizza => pizza.category === this.activeCategory());
    });

    // Detectar cambios en el viewport
    isMobile = signal(false);

    constructor(public cartService: CartService, private renderer: Renderer2, private el: ElementRef) {
        this.checkViewport();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => this.checkViewport());
        }
    }

    private checkViewport() {
        if (typeof window !== 'undefined') {
            this.isMobile.set(window.innerWidth < 1024);
        }
    }

    // Cambiar categoría
    setCategory(category: string) {
        this.activeCategory.set(category);
    }

    // Formatear precio
    formatPrice(price: number): string {
        return `$${price.toLocaleString('es-CL')}`;
    }

    // Añadir al carrito
    addToCart(pizza: Pizza) {
        this.animateToCart(pizza);
        this.cartService.addToCart(pizza);
    }

    animateToCart(pizza: any) {
        const img = this.el.nativeElement.querySelector(`img[src='${pizza.image}']`);
        const cartBtn = document.querySelector('.cart-icon, .cart-button, .fixed.bottom-6.right-6');

        if (!img || !cartBtn) return;

        const imgRect = img.getBoundingClientRect();
        const cartRect = cartBtn.getBoundingClientRect();

        const clone = img.cloneNode(true) as HTMLElement;
        this.renderer.setStyle(clone, 'position', 'fixed');
        this.renderer.setStyle(clone, 'top', `${imgRect.top}px`);
        this.renderer.setStyle(clone, 'left', `${imgRect.left}px`);
        this.renderer.setStyle(clone, 'width', `${imgRect.width}px`);
        this.renderer.setStyle(clone, 'height', `${imgRect.height}px`);
        this.renderer.setStyle(clone, 'z-index', '1000');
        this.renderer.setStyle(clone, 'border-radius', '8px');
        this.renderer.setStyle(clone, 'transition', 'all 0.8s ease-in-out');

        document.body.appendChild(clone);

        requestAnimationFrame(() => {
            this.renderer.setStyle(clone, 'top', `${cartRect.top + 10}px`);
            this.renderer.setStyle(clone, 'left', `${cartRect.left + 10}px`);
            this.renderer.setStyle(clone, 'width', '30px');
            this.renderer.setStyle(clone, 'height', '30px');
            this.renderer.setStyle(clone, 'opacity', '0.5');
        });

        setTimeout(() => clone.remove(), 900);
    }
}

