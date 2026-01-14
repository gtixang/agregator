import { ChangeDetectionStrategy, Component } from '@angular/core';
import { blogPreviewItems } from './blog-preview.data';

@Component({
  selector: 'app-blog-preview',
  standalone: false,
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPreviewComponent {
  public readonly blogPreviewList = blogPreviewItems;
}
