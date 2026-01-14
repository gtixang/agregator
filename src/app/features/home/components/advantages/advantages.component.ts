import { ChangeDetectionStrategy, Component } from '@angular/core';
import { advantages } from './advantages.data';

@Component({
  selector: 'app-advantages',
  standalone: false,
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvantagesComponent {
  public readonly advantagesList = advantages;
}
