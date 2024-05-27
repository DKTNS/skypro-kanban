//import PopUpBrowse from "../../components/popup/popbrowse/PopUpBrowse";
import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import * as TP from "./TaskPage.styled.js";
import { useState } from "react";
import { postTodos } from "../../api";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../components/Hooks/useUser.js";
import { useTasks } from "../../components/Hooks/useTasks.js";

export default function TaskPage() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    console.log(taskData);
    await postTodos({
      task: taskData,
      token: user.token,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение
    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  const handleTask = async ({taskData,token}) => {
    //e.preventDefault(); //из-за сброса в начальное состояние почему то не закрывалось окно календаря.
    await postTodos({
      task: taskData,
      token: user.token,
    }).then((data) => {
      console.log(data);
      navigate(appRoutes.MAIN);
    });
  };
  const addTaskBtn = (taskData) => {
    handleFormSubmit(taskData);
    handleTask(taskData);
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
            <TP.PopNewCardForm id="formNewCard" action="#">
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

            <Calendar
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
            <TP.FormNewCreatButton onClick={addTaskBtn} id="btnCreate">
              Создать задачу
            </TP.FormNewCreatButton>
          </TP.ButtonDiv>
        </TP.PopNewCardBlock>
      </TP.PopNewCardContainer>
    </TP.PopNewCard>
  );
}
