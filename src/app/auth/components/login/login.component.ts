import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router ) {
    this.builForm();
   }

  ngOnInit() {
  }

  private builForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  logIn(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    this.authService.logIn(value.email, value.password)
    .then(() => {
      console.log('Inicia sesion!');
      this.router.navigate(['/admin']);
    })
    .catch(() => {
      alert('no es valido!');
    });
  }
}
