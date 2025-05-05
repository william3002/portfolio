import { Component, Input } from '@angular/core';
import dataPJ from "../../data/projetos.json"

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.css'
})
export class CardProjetoComponent {
  projetos = dataPJ
}
