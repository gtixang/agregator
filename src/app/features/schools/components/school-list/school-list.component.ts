import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-school-list',
  standalone: false,
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchoolListComponent {
  public schools: any[] = [
    {
      name: 'Профессия\nвеб-разработчик',
      school: { name: 'Skillbox', rating: '4.5', review: 'Отзывы о школе 58' },
      price: { old: '85 000', current: '4 745', credit: '' },
      advantages: [
        { text: '3 месяца', icon: 'calendar' },
        { text: 'Начальный', icon: 'levels' },
        { text: 'Стажировка', icon: 'suitcase' },
        { text: 'Диплом', icon: 'diplom' },
      ],
    },
    {
      name: 'Профессия\nвеб-разработчик',
      school: { name: 'Skillbox', rating: '4.5', review: 'Отзывы о школе 58' },
      price: { old: '85 000', current: '4 745', credit: '' },
      advantages: [
        { text: '3 месяца', icon: 'calendar' },
        { text: 'Начальный', icon: 'levels' },
        { text: 'Стажировка', icon: 'suitcase' },
        { text: 'Диплом', icon: 'diplom' },
      ],
    },
    {
      name: 'Профессия\nвеб-разработчик',
      school: { name: 'Skillbox', rating: '4.5', review: 'Отзывы о школе 58' },
      price: { old: '85 000', current: '4 745', credit: '' },
      advantages: [
        { text: '3 месяца', icon: 'calendar' },
        { text: 'Начальный', icon: 'levels' },
        { text: 'Стажировка', icon: 'suitcase' },
        { text: 'Диплом', icon: 'diplom' },
      ],
    },
  ];
}
