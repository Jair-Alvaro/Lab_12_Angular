// posts/post-details/post-details.component.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  selectedPost: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.selectedPost = this.route.snapshot.data['selectedPost'];
      console.log(this.selectedPost); // Imprime el objeto en la consola
    });
  }
}
