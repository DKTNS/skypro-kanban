import { useState } from "react";
import * as S from "./EditTaskPage.styled";
import { Link } from "react-router-dom";
import { Calendar } from "../../components/Calendar/Calendar";

export const EditTaskPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

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
                    // readOnly
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
                  <Link to={"#"}>
                    <S.ABg>Сохранить</S.ABg>
                  </Link>
                </S.BtnBrowseCloseBtnBg>

                <S.BtnBrowseEditBtnBor>
                  <Link to={"#"}>
                    <S.A>Отменить</S.A>
                  </Link>
                </S.BtnBrowseEditBtnBor>
                <S.BtnBrowseDeleteBtnBor id="btnDelete">
                  <Link to={"#"}>
                    <S.A>Удалить задачу</S.A>
                  </Link>
                </S.BtnBrowseDeleteBtnBor>
                </S.BtnBrowse>

                <S.BtnBrowseCloseBtnBg>
                <Link to={"#"}>
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
