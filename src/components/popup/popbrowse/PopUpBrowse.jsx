import { useEffect, useState } from "react";
import * as S from "./PopUpBrowse.styled.js";
import { Link, useParams } from "react-router-dom";
import { deleteTodos, getTodos, putTodos } from "../../../api.js";
import { Calendar } from "../../Calendar/Calendar.jsx";
import { appRoutes } from "../../../lib/appRoutes.js";

export default function PopUpBrowse() {
  const { taskId } = useParams(); // Получаем taskId из параметров маршрута
  const [selectedDate, setSelectedDate] = useState(null);
  const [taskDescription, setTaskDescription] = useState(""); // Состояние для описания задачи
  const [task, setTask] = useState(null);
  const token = localStorage.getItem('token'); // Получаем токен из localStorage или контекста

  console.log("Полученный токен:", token); // Для отладки

  if (!token) {
    console.error("Токен отсутствует. Пожалуйста, войдите в систему.");
    return; // Прекращаем выполнение, если токен отсутствует
  }
  console.log("Полученный токен после if:", token); // Для отладки
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const todos = await getTodos({ token }); // Получаем список задач
        if (!Array.isArray(todos)) {
          throw new Error("Полученные данные не являются массивом");
        }
        const fetchedTask = todos.find((todo) => todo.id === parseInt(taskId)); // Находим задачу по ID
        if (fetchedTask) {
          setTask(fetchedTask);
          setTaskDescription(fetchedTask.description); // Устанавливаем описание задачи
        } else {
          console.error("Задача не найдена");
        }
      } catch (error) {
        console.error("Ошибка при получении задач:", error);
      }
    };

    fetchTask();
  }, [taskId, token]);
  console.log("Полученный токен после UseEffect:", token); // Для отладки
  const handleSaveTask = async () => {
    try {
      await putTodos({
        task: { description: taskDescription },
        _id: task._id, // Используем _id задачи
        token: token,
      });
      console.log(task); // Проверка доступности task
      console.log("Задача обновлена");
    } catch (error) {
      console.error("Ошибка при редактировании задачи:", error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await deleteTodos({ _id: taskId, token: userToken }); // Удаляем задачу по идентификатору
      console.log("Задача удалена");
      // Здесь можно добавить логику для обновления состояния или навигации
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }};
  
  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи</S.PopBrowseTtl>
              <S.CategoriesThemeTopOrangeActiveCategory>
                <S.WebDesign>Web Design</S.WebDesign>
              </S.CategoriesThemeTopOrangeActiveCategory>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPSbttl>Статус</S.StatusPSbttl>
              <S.StatusThemes>
                <S.StatusThemeHide>
                  <S.StatusThemeP>Без статуса</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeGray>
                  <S.StatusThemePGray>Нужно сделать</S.StatusThemePGray>
                </S.StatusThemeGray>
                <S.StatusThemeHide>
                  <S.StatusThemeP>В работе</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeP>Тестирование</S.StatusThemeP>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeP>Готово</S.StatusThemeP>
                </S.StatusThemeHide>
              </S.StatusThemes>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)} // Обновляем состояние при изменении
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnEditHide>
              <S.BtnGroup>
                <S.BtnBrowse>
                  <S.BtnBrowseCloseBtnBg>
                    <Link to={appRoutes.EDITTASK} onClick={handleSaveTask} >
                    <S.ABg>Сохранить</S.ABg>
                    </Link>
                  </S.BtnBrowseCloseBtnBg>
                  <S.BtnBrowseEditBtnBor>
                    <Link to={appRoutes.MAIN} >
                    <S.A>Отменить</S.A>
                    </Link>
                  </S.BtnBrowseEditBtnBor>
                  <S.BtnBrowseDeleteBtnBor id="btnDelete">
                    <Link to={appRoutes.MAIN} onClick={handleDeleteTask}>
                    <S.A>Удалить задачу</S.A>
                    </Link>
                  </S.BtnBrowseDeleteBtnBor>
                </S.BtnBrowse>
                <S.BtnBrowseCloseBtnBg>
                  <Link to={appRoutes.MAIN}>
                  <S.ABg>Закрыть</S.ABg>
                  </Link>
                </S.BtnBrowseCloseBtnBg>
              </S.BtnGroup>
            </S.PopBrowseBtnEditHide>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
