import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	standalone: true,
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	imports: [IonicModule, FormsModule, CommonModule,
	]
})
export class LoginComponent {
	username = '';
	password = '';
	errorMsg = '';

	private router = inject(Router); // ✅ replace constructor

	login() {
		const savedUser = localStorage.getItem('user');
		const savedPass = localStorage.getItem('pass');

		if (
			(this.username === 'user' && this.password === 'Password@123') ||
			(this.username === savedUser && this.password === savedPass)
		) {
			this.router.navigateByUrl('/todo');
		} else {
			this.errorMsg = 'Invalid credentials';
		}
	}

	goToRegister() {
		this.router.navigateByUrl('/register');
	}
}
