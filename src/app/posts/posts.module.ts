// posts.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [PostListComponent, PostDetailsComponent],
  imports: [CommonModule, RouterModule], // Asegúrate de importar RouterModule aquí
})
export class PostsModule {}
