import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BLOG_PREVIEW_ITEMS } from '@pages/home-page/constants';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPreviewComponent {
  public readonly blogPreviewList = BLOG_PREVIEW_ITEMS;
}
