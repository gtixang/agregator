import { Component } from '@angular/core';
import { ADVANTAGES } from './advantages.data';

@Component({
  selector: 'app-index-advantages',
  standalone: false,
  templateUrl: './index-advantages-component.html',
  styleUrl: './index-advantages-component.scss',
})
export class IndexAdvantagesComponent {
  public readonly advantages = ADVANTAGES;
}
