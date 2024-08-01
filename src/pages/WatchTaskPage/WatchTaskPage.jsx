import { useState } from "react";
import { Calendar } from "../../components/Calendar/Calendar";
import * as S from "./WatchTaskPage.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";


export default function WatchTaskPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [taskDescription, setTaskDescription] = useState(""); // Состояние для описания задачи
  const handleEditTask = async () => {
    try {
        await putTodos({ task: { description: taskDescription }, _id: taskId, token: userToken }); // Передаем null для удаления
      console.log("Задача обновлена");
      // Здесь можно добавить логику для обновления состояния или навигации
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };



  const handleDeleteTask = async () => {
    try {
      await deleteTodos({ task: _id }); // Удаляем задачу по идентификатору
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
                  <Link to={appRoutes.MAIN} onClick={handleEditTask}>
                    Редактировать задачу
                  </Link>
                </S.BtnBrowseEditBtnBor>
                <S.BtnBrowseDeleteBtnBor>
                  <Link to={appRoutes.MAIN} onClick={handleDeleteTask}>
                    Удалить задачу
                  </Link>
                </S.BtnBrowseDeleteBtnBor>
                </S.BtnBrowse>
                <S.BtnBrowseCloseBtnBg>
                <Link to={appRoutes.MAIN} >
                  Закрыть
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
