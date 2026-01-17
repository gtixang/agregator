import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SupabaseService } from '@shared/services/supabase.service';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public readonly subabase = inject(SupabaseService);

  ngOnInit() {
    this.subabase.getSchools();
  }
}
