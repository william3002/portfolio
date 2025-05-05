import { Component } from '@angular/core';
import dataHB from '../../data/habilidades.json'

@Component({
  selector: 'app-card-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './card-habilidades.component.html',
  styleUrl: './card-habilidades.component.css'
})
export class CardHabilidadesComponent {
  habilidades = dataHB
}
