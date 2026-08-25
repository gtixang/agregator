export type CourseCategory =
  | 'programming'
  | 'marketing'
  | 'design'
  | 'analytics'
  | 'finance'
  | 'management'
  | 'content-marketing'
  | 'foreign-languages';

interface TopicTab {
  title: string;
  value: CourseCategory;
}

export const TOPIC_TABS: TopicTab[] = [
  {
    title: 'Программирование',
    value: 'programming',
  },
  {
    title: 'Маркетинг',
    value: 'marketing',
  },
  {
    title: 'Дизайн',
    value: 'design',
  },
  {
    title: 'Аналитика',
    value: 'analytics',
  },
  {
    title: 'Финансы',
    value: 'finance',
  },
  {
    title: 'Управление',
    value: 'management',
  },
  {
    title: 'Контент-маркетинг',
    value: 'content-marketing',
  },
  {
    title: 'Иностранные языки',
    value: 'foreign-languages',
  },
];
