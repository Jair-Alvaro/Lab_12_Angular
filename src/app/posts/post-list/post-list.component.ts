// posts/post-list/post-list.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Cómo comenzar con Angular', content: 'Guía completa para principiantes' },
    { id: 2, title: 'Angular vs React: Comparación detallada', content: 'Análisis de características y rendimiento' },
    { id: 3, title: 'Desarrollo de aplicaciones CRUD con Angular y Firebase', content: 'Tutorial paso a paso' },
    { id: 4, title: 'Mejores prácticas para el enrutamiento en Angular', content: 'Consejos para una navegación eficiente' },
  ];

  constructor(private router: Router) {}

  goToDetails(post: any): void {
    this.router.navigate(['/posts', post.id], { state: { selectedPost: post } });
  }
}
