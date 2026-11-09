import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  templateUrl: './whatsapp-fab.component.html',
  styleUrl: './whatsapp-fab.component.scss'
})
export class WhatsappFabComponent {
  readonly whatsappUrl =
    'https://wa.me/525561380652?text=Hola%20Antonio,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20platicar%20sobre%20un%20proyecto.';
}

