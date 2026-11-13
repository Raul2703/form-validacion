import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-confirmation-page',
  styleUrl: './confirmation-page.css',
  templateUrl: './confirmation-page.html',
})
export class ConfirmationPage {
  nombreMascota: string | null;

  constructor(private route: ActivatedRoute) {
    this.nombreMascota = this.route.snapshot.paramMap.get('nombre');
  }
}
