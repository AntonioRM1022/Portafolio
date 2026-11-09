import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  profileImage = 'assets/images/profile-placeholder.svg';
  partnerImage = 'assets/images/4nucleos-placeholder.svg';

  isPartnerModalOpen = false;

  openPartnerModal(): void {
    this.isPartnerModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closePartnerModal(): void {
    this.isPartnerModalOpen = false;
    document.body.style.overflow = '';
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/profile-placeholder.svg';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isPartnerModalOpen) {
      this.closePartnerModal();
    }
  }
}
