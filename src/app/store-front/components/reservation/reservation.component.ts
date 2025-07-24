import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";



@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html',
    imports: [RouterModule, CommonModule]
})
export class ReservationComponent {
    // Estado del formulario
    reservationForm = signal({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });

    // Categorias de pizzas
    pizzaCategories = signal([
        {
            title: 'Pizzas Clásicas',
            description: 'Disfruta de las pizzas tradicionales italianas, desde la Margherita hasta la Quattro Formaggi, elaboradas con ingredientes de la más alta calidad.',
            image: ''
        },
        {
            title: 'Especialidades de la Casa',
            description: 'Explora nuestras pizzas únicas, creadas con combinaciones originales de sabores que deleitarán tu paladar.',
            image: ''
        },
        {
            title: 'Opciones Vegetarianas',
            description: 'Te ofrecemos una selección de pizzas vegetarianas deliciosas y llenas de sabor, para que disfrutes de la auténtica cocina italiana sin carne.',
            image: 'https://res.cloudinary.com/dv7wctcfp/image/upload/v1721885972/La%20Pizzata/y8zep1l5f8m2allw1yk5.jpg'
        }
    ]);

    // Manejar el envio del formulario
    submitForm() {
        console.log('Reserva enviada:', this.reservationForm());
        //pte
        alert('¡Reserva enviada con éxito! Nos pondremos en contacto contigo pronto.');
        this.reservationForm.set({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            message: ''
        });
    }
}