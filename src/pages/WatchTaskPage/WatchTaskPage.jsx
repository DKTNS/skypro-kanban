import { useState } from "react";
import { Calendar } from "../../components/Calendar/Calendar";
import * as S from "./WatchTaskPage.styled";
import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { getTodos, putTodos } from "../../api";
import { useEffect } from "react";

export default function WatchTaskPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [taskDescription, setTaskDescription] = useState(""); // Состояние для описания задачи
  const [task, setTask] = useState(null);
  const { taskId } = useParams(); // Получаем taskId из параметров маршрута
  const token = localStorage.getItem("token"); // Получаем токен из localStorage или контекста

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const todos = await getTodos({ token }); // Получаем список задач
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

  const handleEditTask = async () => {
    try {
      await putTodos({
        task: { description: taskDescription },
        _id: task._id,
        token: token,
      }); // Передаем null для удаления
      console.log(task); // Проеврка доступности task
      console.log("Задача обновлена");
    } catch (error) {
      console.error("Ошибка при редактировании задачи:", error);
    }
  };

  //   const handleDeleteTask = async () => {
  //     try {
  //       await deleteTodos({
  //         task: { description: taskDescription },
  //         _id: task,
  //         token: userToken,
  //       }); // Удаляем задачу по идентификатору
  //       console.log("Задача удалена");
  //       // Здесь можно добавить логику для обновления состояния или навигации
  //     } catch (error) {
  //       console.error("Ошибка при удалении задачи:", error);
  //     }
  //   };
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
                <S.StatusThemeGray>
                  <S.StatusThemePGray>Нужно сделать</S.StatusThemePGray>
                </S.StatusThemeGray>
              </S.StatusThemes>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="Описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowse>
                  <S.BtnBrowseEditBtnBor>
                    <Link to={appRoutes.EDITTASK} onClick={handleEditTask}>
                      <S.A>Редактировать задачу</S.A>
                    </Link>
                  </S.BtnBrowseEditBtnBor>
                  <S.BtnBrowseDeleteBtnBor>
                    <Link to={"#"}>
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
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
