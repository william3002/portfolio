import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import dataProjetos from '../../../../public/data/projetos.json'

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  projetos = dataProjetos
}
