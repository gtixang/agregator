import { Component } from '@angular/core';
import { advantages } from './advantages.data';

@Component({
  selector: 'app-index-advantages',
  standalone: false,
  templateUrl: './index-advantages-component.html',
  styleUrl: './index-advantages-component.scss',
})
export class IndexAdvantagesComponent {
  public readonly advantagesList = advantages;
}
