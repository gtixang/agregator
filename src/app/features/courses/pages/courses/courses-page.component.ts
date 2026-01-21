import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  standalone: false,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPageComponent {
  public courses: any[] = [
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
