import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CardHabilidadesComponent } from "../../components/card-habilidades/card-habilidades.component";
import { CardProjetoComponent } from "../../components/card-projeto/card-projeto.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NavComponent } from "../../components/nav/nav.component";
import { CardQualificacaoComponent } from "../../components/card-qualificacao/card-qualificacao.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardHabilidadesComponent, CardProjetoComponent, FooterComponent, NavComponent, CardQualificacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
}
