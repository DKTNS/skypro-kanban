# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# skypro-kanban "Общая информация"

В этом репозитории реализована работа с карточками с названиями, описанием, выбором категории, состояния и сроком выполнения

Проект задеплоен на gh pages:
https://github.com/DKTNS/skypro-kanban/

## Разработка

Проект реализован на основе шаблона (https://www.figma.com/file/E7Cy6rpz0dYtZB5ygErVVX/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B0.-React.-%D0%92%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA?type=design&node-id=3%3A2&mode=dev)

- Установите зависимости командой `npm install`
- Запустите dev сервер `npm run dev`
Запускает приложение в режиме разработки.

Откройте [http://localhost:5173/] чтобы посмотреть его в браузере.

#### Функционал
- Регистрация (Имя, email, пароль)
- Авторизация (email, пароль)
- Создание новой задачи
    - Доступно изменние: темы, описания задачи, дата, тип работыб выбор статуса
    - Сохранение
    - Отмена создания
- Редактирование существующей задачи.
    - Доступно изменние: описания задачи, даты, типа работы, измненение   статуса
    - Сохранение
    - Удаление
    - Отмена редактирования

