import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import dataHabilidades from '../../../../public/data/habilidades.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
mostrarHabilidades:boolean = false
  conteudoAtual: 'Sobre mim' | 'Habilidades' = 'Sobre mim'
  icons = dataHabilidades

  mostrarConteudo(){
    this.mostrarHabilidades = !this.mostrarHabilidades
  }

  mostrarHabs(){
    this.mostrarHabilidades = true
  }

  mostrarSobre(){
    this.mostrarHabilidades = false
  }
}
