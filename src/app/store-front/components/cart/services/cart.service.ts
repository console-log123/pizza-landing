import { Injectable, signal } from "@angular/core";
import { Pizza } from "../../menu/interfaces/product";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartItems = signal<Pizza[]>([]);
    private showCart = signal(false);

    items = this.cartItems.asReadonly();
    isCartOpen = this.showCart.asReadonly();

    addToCart(pizza: Pizza) {
        const existingItem = this.cartItems().find(item => item.id === pizza.id);

        if (existingItem) {
            this.cartItems.update(items =>
                items.map(item =>
                    item.id === pizza.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            );
        } else {
            this.cartItems.update(items => [...items, { ...pizza, quantity: 1 }]);
        }
    }

    removeFromCart(pizzaId: number) {
        this.cartItems.update(items => items.filter(item => item.id !== pizzaId));
    }

    updateQuantity(pizzaId: number, quantity: number) {
        if (quantity < 1) {
            this.removeFromCart(pizzaId);
            return;
        }

        this.cartItems.update(items =>
            items.map(item =>
                item.id === pizzaId ? { ...item, quantity } : item
            )
        );
    }

    toggleCart() {
        this.showCart.update(show => !show);
    }

    getTotal() {
        return this.cartItems().reduce(
            (total, item) => total + (item.price * (item.quantity || 1)), 0
        );
    }

    clearCart() {
        this.cartItems.set([]);
    }

}