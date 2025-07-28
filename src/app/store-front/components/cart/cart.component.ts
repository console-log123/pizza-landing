import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CartService } from "./services/cart.service";
import { CommonModule, CurrencyPipe } from "@angular/common";


@Component({
    selector: 'app-cart',
    imports: [RouterModule,CurrencyPipe,CommonModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent {

    constructor(public cartService: CartService) { }

    incrementQuantity(pizza: any) {
        this.cartService.updateQuantity(pizza.id, (pizza.quantity || 1) + 1);
    }

    decrementQuantity(pizza: any) {
        this.cartService.updateQuantity(pizza.id, (pizza.quantity || 1) - 1);
    }

}