import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const user = document.querySelector('#container_user');
      const containerDescription = document.querySelector('#container_description');
      const sobre = document.getElementById("sobre");
      const habilidades = document.getElementById("box-pai");
      const btnRedeSocial = document.querySelectorAll('.btns-social');

      let tl = gsap.timeline();

      gsap.registerPlugin(ScrollTrigger);

      gsap.from(user, {
        x: 1000,
        duration: 2.5,
        ease: "expo.out",
      });

      gsap.from(containerDescription, {
        x: -1000,
        duration: 2.5,
        ease: "expo.out",
      });

      // btnRedeSocial.forEach(botao => {
      //   botao?.addEventListener("mouseenter", () =>{
      //     gsap.from(botao, {
      //       scale: 1,
  
      //       duration: 0.5,
      //       delay: 0.5,
      //       ease:"back.out(1.7)"
      //     });
      //   })  
      // })
      
      gsap.from(sobre, {
        xPercent: -500,
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sobre,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.from(habilidades, {
        x: 500,
        duration: 2,
        daley:1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sobre,
          start: "top center",
          end: "+=1000px",
          scrub: true,
        },
      });
    }
  }
}
