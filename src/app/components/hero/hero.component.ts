import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  // Cuando tengas tu foto, guárdala en 'public/assets/images/profile.jpg' y cambia esta ruta
  profileImage = 'assets/images/profile-placeholder.svg';

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/profile-placeholder.svg';
  }
}
