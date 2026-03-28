import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/ui';

@Component({
  selector: 'app-review-sort-control',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './review-sort-control.component.html',
  styleUrl: './review-sort-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewSortControlComponent {
  public readonly sortControl = new FormControl<'asc' | 'desc'>('desc', {
    nonNullable: true,
  });

  @Output() sortChange = new EventEmitter<'asc' | 'desc'>();

  ngOnInit() {
    this.sortControl.valueChanges.subscribe((value) => {
      this.sortChange.emit(value);
    });
  }
}
