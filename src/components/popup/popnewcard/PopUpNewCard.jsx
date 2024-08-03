import { Link, useNavigate } from "react-router-dom";
import * as TP from "./PopUpNewCard.styled.js";
import { useState } from "react";
import { useUser } from "../../../Hooks/useUser.js";
import { appRoutes } from "../../../lib/appRoutes.js";
import { CalendarR } from "../../Calendar/Calendar.syled.js";
import { useTasks } from "../../../Hooks/useTasks.js";
import { postTodos } from "../../../api.js";


export default function PopUpNewCard() {
  const { user } = useUser();
  const { setCards } = useTasks();
  const [selectedDate, setSelectedDate] = React.useState(null);
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState({
      title: "",
      description: "",
      topic: ""
  });
  const handleFormSubmit = async (e) => {
      e.preventDefault();
      const taskData = {
          ...newTask,
          date: selectedDate,
          token: user.token,

      }
      await postTodos(taskData).then((data) => {
          console.log(data);
          if (data.error) {
              return alert("Пожалуйста заполните все поля");
          }
          setCards(data.tasks);
          console.log(data.tasks);
          navigate(appRoutes.MAIN);
      }).catch((error) => {
          alert(error.message);
      })
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target; // Извлекаем имя поля и его значение
      console.log(name, value)
      setNewTask({
          ...newTask, // Копируем текущие данные из состояния
          [name]: value, // Обновляем нужное поле
      });
  };

  return (
    <TP.PopNewCard id="popNewCard">
      <TP.PopNewCardContainer>
        <TP.PopNewCardBlock>
          <TP.PopNewCardContent>
            <TP.PopNewCardTtl>Создание задачи</TP.PopNewCardTtl>
            <Link to={appRoutes.MAIN}>
              {" "}
              <TP.PopNewCardClose>&#10006;</TP.PopNewCardClose>
            </Link>
          </TP.PopNewCardContent>
          <TP.PopNewCardWrap>
            <TP.PopNewCardForm className="form-new" id="formNewCard" action="#">
              <TP.FormNewBlock>
                <TP.Sbttl htmlFor="textArea">Название задачи</TP.Sbttl>
                <TP.FormNewInput
                  type="text"
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </TP.FormNewBlock>
              <TP.FormNewBlock>
                <TP.Sbttl htmlFor="textArea">Описание задачи</TP.Sbttl>
                <TP.FormNewArea
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  id="textArea"
                  placeholder="Введите описание задачи..."
                ></TP.FormNewArea>
              </TP.FormNewBlock>
            </TP.PopNewCardForm>

            <CalendarR
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </TP.PopNewCardWrap>
          <TP.CategoriesThemes>
            <TP.CategoriesP>Категория</TP.CategoriesP>
          </TP.CategoriesThemes>
          <TP.CategoriesThemes>
            <input
              type="radio"
              id="radio1"
              name="topic"
              value="Web Design"
              onChange={handleInputChange}
            />
            <TP.WebDesignLabel htmlFor="radio1">Web Design</TP.WebDesignLabel>

            <input
              type="radio"
              id="radio2"
              name="topic"
              value="Research"
              onChange={handleInputChange}
            />
            <TP.ResearchLabel htmlFor="radio2">Research</TP.ResearchLabel>

            <input
              type="radio"
              id="radio3"
              name="topic"
              value="Copywriting"
              onChange={handleInputChange}
            />
            <TP.CopywritingLabel htmlFor="radio3">
              Copywriting
            </TP.CopywritingLabel>
          </TP.CategoriesThemes>
          <TP.ButtonDiv>
            <TP.FormNewCreatButton onClick={handleFormSubmit} id="btnCreate">
              Создать задачу
            </TP.FormNewCreatButton>
          </TP.ButtonDiv>
        </TP.PopNewCardBlock>
      </TP.PopNewCardContainer>
    </TP.PopNewCard>
  );
}
