import { Component } from '@angular/core';

export interface Section {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  skills: Section[] = [
    {
      name: 'Criação de Style Guides',
    },
    {
      name: 'SEO e Core Web Vitals',
    },
    {
      name: 'Experiência em UX e UI',
    },
    {
      name: 'Principais Frameworks Front-end do mercado',
    },
  ];
  softskills: Section[] = [
    {
      name: 'Trabalhar em times ágeis',
    },
    {
      name: 'Busca por conhecimento',
    },
    {
      name: 'Solução de problemas',
    },
    {
      name: 'Passar conhecimento adiante',
    },
  ];
}
