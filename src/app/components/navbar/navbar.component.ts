import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  activeSection = '';

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = ['metodologia', 'soluciones', 'contacto'];
    const scrollPosition = window.scrollY + 120;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = sectionId;
          return;
        }
      }
    }

    if (window.scrollY < 250) {
      this.activeSection = '';
    }
  }
}
