import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []); // Пустой массив зависимостей для запуска только при монтировании компонента

  function addCard() {
    //добавление карточки
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Готово",
    };
    setCards([...cards, newCard]);
  }
  return (
    <>
      <div className="wrapper">
        <h1></h1>
        {/*<!-- pop-up start-->*/}

        <Outlet />
        {/*<!-- pop-up end-->*/}

        <Header addCard={addCard} />
        {isLoading ? (
          "Loading..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <MainColumn
                title={status}
                key={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </div>
      <script src="js/script.js"></script>
    </>
  );
}
