import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  nav: string[] = ['Sobre', 'Projetos', 'Habilidades', 'Qualificação', 'Contato' ];
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
