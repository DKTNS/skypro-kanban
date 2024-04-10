import { useEffect, useState } from "react";
import PopUpExit from "../../components/popup/popexit/PopUpExit";
import PopUpNewCard from "../../components/popup/popnewcard/PopUpNewCard";
import PopUpBrowse from "../../components/popup/popbrowse/PopUpBrowse";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import MainColumn from "../../components/MainColumn/MainColumn";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainPage() {
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

        <PopUpExit />
        <PopUpNewCard />
        <PopUpBrowse />
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

export default App;
