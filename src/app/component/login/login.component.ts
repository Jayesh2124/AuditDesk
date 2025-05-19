import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  valid = false;
  email = '';
  password = '';
  CredentialForm : FormGroup;
  @Inject('auth')
  private auth!: AuthService;
  private toastService = inject(ToastService);

  constructor(auth: AuthService, private fb: FormBuilder, private route: Router) {
    this.CredentialForm = this.fb.group({
      email: [''],
      password: ['']
    });
    this.CredentialForm.valueChanges.subscribe((value) => {
      this.email = value.email;
      this.password = value.password;
      this.valid = this.CredentialForm.valid;
    });
    this.auth = auth;
  }

  login() {
    debugger
    let emailId = this.email;
    let password = this.password;
    this.auth.login(emailId, password).subscribe({ 
      next: (response) => {
        console.log('Login successful', response);
        this.toastService.show('Login successful, Hello from Tailwind toaster!','success');
        this.route.navigate(['/dashboard-admin']);        
      },
      error: (error) => {
        console.error('Login failed', error);
        this.toastService.show('Login Failed, Please try with right Credentials!', 'error')
      }
    });
  }
}
