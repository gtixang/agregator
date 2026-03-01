import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ADVANTAGES_ITEMS } from '@pages/home/constants';

@Component({
  selector: 'app-advantages',
  standalone: true,
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvantagesComponent {
  public readonly advantagesList = ADVANTAGES_ITEMS;
}
