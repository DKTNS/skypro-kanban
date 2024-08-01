import { useState } from "react";
import * as S from "./PopUpBrowse.styled.js";
import { Link } from "react-router-dom";
import { deleteTodos, putTodos } from "../../../api.js";
import { Calendar } from "../../Calendar/Calendar.jsx";

export default function PopUpBrowse({ taskId, userToken }) {
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
                    <Link to={"#"} onClick={handleEditTask}>
                      Сохранить
                    </Link>
                  </S.BtnBrowseCloseBtnBg>
                  <S.BtnBrowseEditBtnBor>
                    <Link to={"#"} onClick={handleEditTask}>
                      Отменить
                    </Link>
                  </S.BtnBrowseEditBtnBor>
                  <S.BtnBrowseDeleteBtnBor id="btnDelete">
                    <Link to={"#"} onClick={handleDeleteTask}>
                      Удалить задачу
                    </Link>
                  </S.BtnBrowseDeleteBtnBor>
                </S.BtnBrowse>
                <S.BtnBrowseCloseBtnBg>
                  <Link to={"#"}>
                    Закрыть
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
