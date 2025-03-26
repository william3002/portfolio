import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() email = "williamaraujodossantos@gmail.com"
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
