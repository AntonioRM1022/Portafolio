import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { ContactComponent } from './components/contact/contact.component';
import { WhatsappFabComponent } from './components/whatsapp-fab/whatsapp-fab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    MethodologyComponent,
    SolutionsComponent,
    ContactComponent,
    WhatsappFabComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}

