import { Component } from '@angular/core';
import { blogPreviewItems } from './blog-preview.data';

@Component({
  selector: 'app-index-blog-preview',
  standalone: false,
  templateUrl: './index-blog-preview.component.html',
  styleUrl: './index-blog-preview.component.scss',
})
export class IndexBlogPreviewComponent {
  public readonly blogPreviewList = blogPreviewItems;
}
