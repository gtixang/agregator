import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BLOG_PREVIEW_ITEMS } from '@features/home/constants';

@Component({
  selector: 'app-blog-preview',
  standalone: false,
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPreviewComponent {
  public readonly blogPreviewList = BLOG_PREVIEW_ITEMS;
}
