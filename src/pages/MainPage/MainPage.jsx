import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import MainColumn from "../../components/MainColumn/MainColumn";
import { getTodos } from "../../api";
import { useUser } from "../../Hooks/useUser";
import { useTasks } from "../../Hooks/useTasks";



function MainPage() {
  const { cards, setCards } = useTasks();
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useUser();

  useEffect(() => {
    getTodos({ token: user.token })
      .then((todos) => {
        console.log(todos);
        setCards(todos.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [user, setCards]);

  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <>
      <Outlet />
      <div className="wrapper">
        <Outlet />
        <Header />
        {isLoading ? (
          "Загрузка..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <MainColumn
                title={status}
                key={status}
                cardList={cards?.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </div>
    </>
  );
}

export default MainPage;

