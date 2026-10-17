import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	standalone: true,
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	imports: [IonicModule, FormsModule, CommonModule,
	]
})
export class RegisterComponent {
	fullName = '';
	username = ''; // For email
	password = '';
	errorMsg: string | null = null;
	agreeTerms: boolean = false;

	private router = inject(Router);

	register() {
		if (!this.fullName || !this.username || !this.password) {
			this.errorMsg = 'Please fill in all fields.';
			return;
		}

		if (!this.agreeTerms) {
			this.errorMsg = "You must agree to the terms & conditions.";
			return;
		}

		this.errorMsg = null; // Clear previous errors
		localStorage.setItem('user', this.username);
		localStorage.setItem('pass', this.password);
		this.router.navigateByUrl('/');
	}

	goToLogin() {
		console.log('Navigating to Login page...');
		this.router.navigateByUrl('/'); // Navigate to the login page route
	}

	socialLogin(platform: string) {
		console.log(`Attempting social login with ${ platform }`);
		alert(`Social login with ${ platform } not implemented yet!`); // Use Ionic toast or modal
	}
}
