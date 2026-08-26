# 📚 Агрегатор курсов и школ

Краткое описание: Приложение-агрегатор, собирающее и отображающее информацию о курсах и школах (списки курсов, отзывы, детали школ и онлайн-курсов).

---

## 🔧 Технологический стек (Tech Stack)

- Angular: ^20.3.0 (@angular/core, @angular/common, @angular/router и др.)
- RxJS: ~7.8.0
- UI: @angular/material, @angular/cdk
- Стили: Sass (sass) и SCSS (файлы в src/styles)
- API / Бэкенд-клиенты: @supabase/supabase-js
- Утилиты: date-fns, normalize.css
- Сборка и CLI: @angular/cli, @angular/build
- TypeScript: ~5.9.2
- Линтинг и форматирование: ESLint, Prettier, angular-eslint, eslint-config-prettier
- Хуки и форматирование при коммите: Husky, lint-staged (eslint, prettier, stylelint в конфигурации)
- Тесты: Jasmine, Karma

Примечание: NgRx (store/effects) в зависимостях не обнаружен — состояние, вероятно, управляется через RxJS и сервисы.

---

## ✨ Ключевые функции (Features)

- Списки курсов и школ с возможностями фильтрации и сортировки (features: listing, course-list, school-list)
- Просмотр деталей курса и страницы школы (pages: course-details, school-courses)
- Управление и отображение отзывов (features/widgets: reviews, review-list, school-reviews)
- Разделы для онлайн-курсов и онлайн-школ (pages: online-courses, online-schools)
- Реактивная логика с RxJS для обработки потоков данных и обновлений
- Интеграция с Supabase как возможная бэкенд-платформа (клиент расположен в shared/api)
- Переиспользуемые виджеты: header, footer, course-list, review-list

---

## 🏗 Архитектура проекта (Feature-sliced)

Структура проекта следует подходу feature-sliced и организована по понятным слоям:

- [src/app](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app) — корневая папка приложения
  - [entities](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/entities) — доменные сущности: category, course, reviews, school
  - [features](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/features) — композиции из сущностей и компонентов (course-list, listing, reviews)
  - [pages](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/pages) — страницы приложения (home, course-details, online-courses, online-schools, not-found)
  - [widgets](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/widgets) — переиспользуемые UI-блоки (header, footer, course-list, review-list, school-list)
  - [shared](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/shared) — общие сервисы, API-клиенты, модели и UI-элементы
    - [shared/api](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/shared/api) — клиенты и абстракции для общения с бэкендом (Supabase и др.)
    - [shared/models](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/shared/models) — типы и интерфейсы данных
    - [shared/ui](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/shared/ui) — повторно используемые небольшие UI-компоненты
  - [router](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/router) — конфигурация маршрутов
  - app.ts / app.config.ts / app.html — инициализация и корневой шаблон

Эта организация облегчает навигацию: чтобы понять, как работает страница, начинайте с соответствующей папки в pages, далее прослеживайте зависимости в features и entities, а общая логика лежит в shared.

---

## 🚀 Запуск проекта локально (Getting started)

1. Установить зависимости:

   npm install

2. Запустить локальный дев-сервер:

   npm start

   или напрямую через Angular CLI:

   ng serve --host 0.0.0.0 --port 4200

3. Сборка для продакшена:

   npm run build

4. Запуск тестов:

   npm test

5. Линтинг и форматирование:

   npm run lint
   npm run lint:fix
   npm run prettier

---

## 🧭 Быстрая навигация по коду

- Корневой модуль/точка входа: [src/main.ts](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/main.ts)
- Глобальные стили: [src/styles/styles.scss](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/styles/styles.scss)
- Роуты: [src/app/router](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/router)
- Общие API-клиенты: [src/app/shared/api](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/shared/api)
- Сущности: [src/app/entities](C:/Users/Runar/Desktop/agregator.worktrees/pasted-text-processing/src/app/entities)

---

## ✅ Рекомендации и замечания

- Если потребуется глобальное состояние с более сложной логикой (кеширование, нормализация, optimistic updates), стоит рассмотреть добавление NgRx или другого state management.
- Проверить настройки stylelint (используется в lint-staged) — в package.json stylelint не перечислен в devDependencies прямо, но настроен в lint-staged.
- Добавить в README раздел с архитектурными решениями (строгое описание feature-sliced паттерна), если командный лидер захочет детализировать границы ответственности папок.

---

Если нужно — могу:
- дополнительно расширить секцию «Архитектура» диаграммой или примером зависимостей между модулями;
- подготовить CHANGELOG или шаблон PR;
- сделать коммит и запушить файл в репозиторий (требуется подтверждение для выполнения git-операций).
