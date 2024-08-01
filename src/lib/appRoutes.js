export const appRoutes = {
  MAIN: "/",
  TASK: "/task/:_id", // Путь для создания новой карточки
  WATCHTASK: "/watchtask/:_id",
  EDITTASK: "/edittask/:_id", // Путь для редактирования карточки
  EXIT: "/exit", // Путь для выхода
  SIGNIN: "/signin", // Путь для страницы входа
  SIGNUP: "/signup", // Путь для страницы регистрации
  NOTFOUND: "*", // Путь для страницы "Не найдено"
};
