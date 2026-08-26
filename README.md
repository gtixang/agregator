# 📚 Курсовой Агрегатор (Course & School Aggregator)

Современное веб-приложение на Angular для поиска, сравнения и выбора образовательных курсов.

🔗 **Демо:** [agregator-nu.vercel.app](https://vercel.app)

---

## ✨ Функции (Features)
* **Каталог:** Удобный поиск, фильтрация и сортировка курсов по категориям.
* **Карточки:** Детальная информация об онлайн-школах и программах обучения.
* **Отзывы:** Система оценок и публикация отзывов пользователей.

---

## 🏗 Архитектура (FSD)
Проект спроектирован по методологии **Feature-Sliced Design (FSD)** для обеспечения слабой связанности модулей и легкого масштабирования: `pages`, `widgets`, `features`, `entities`, `shared`.

---

## 🔧 Технологический стек (Tech Stack)
* **Frontend:** Angular 20+, TypeScript, RxJS, Angular Material.
* **Backend / API:** Supabase (@supabase/supabase-js).
* **Code Quality:** ESLint, Prettier, Husky.

---

## 🚀 Локальный запуск (Getting Started)

1. Установите зависимости:
```bash
npm install
```

2. Запустите локальный сервер разработки:
```bash
npm start
```
Приложение будет доступно по адресу `http://localhost:4200/`.
