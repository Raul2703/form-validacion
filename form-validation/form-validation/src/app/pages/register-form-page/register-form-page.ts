import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MICROCHIP, NOMBRE_MASCOTA, PASSWORD, SOLO_LETRAS, TELEFONO } from '../../shared/regex';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form-page',
  styleUrl: './register-form-page.css',
  templateUrl: './register-form-page.html',
})
export class RegisterFormPage {
  constructor(private router: Router) {}

  registerForm = new FormGroup({
    owner: new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(SOLO_LETRAS)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(SOLO_LETRAS)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(TELEFONO)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
    pet: new FormGroup({
      petName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(NOMBRE_MASCOTA)]),
      species: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      breed: new FormControl('', Validators.maxLength(40)),
      age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(30)]),
      weight: new FormControl(null, [Validators.required, Validators.min(0.1), Validators.max(90)]),
      microchip: new FormControl('', [Validators.required, Validators.pattern(MICROCHIP)]),
    }),
    account: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(24), Validators.pattern(PASSWORD)]),
      reason: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]),
      privacy: new FormControl(false, Validators.requiredTrue),
      reminders: new FormControl(true),
    }),
  });

 
  err(field: string, error: string) {
    const c = this.registerForm.get(field);
    return c?.hasError(error) && (c.dirty || c.touched);
  }

 
  passFalla(regex: string) {
    const c = this.registerForm.get('account.password');
    return c?.dirty && !new RegExp(regex).test(c.value || '');
  }

  onSubmit() {
    this.router.navigate(['/confirmacion', this.registerForm.get('pet.petName')?.value]);
  }
}
