import { Component, signal, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
    showLoginSignal = signal(true);

    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            usuario: ['', Validators.required],
            contrasena: ['', Validators.required],
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            console.log('Datos enviados:', this.loginForm.value);
        }
    }

    close() {
        this.showLoginSignal.set(false);
    }

    
}