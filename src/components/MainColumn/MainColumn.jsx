import Card from "../Card/Card";


export default function MainColumn({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => <Card StatusTask={card.theme} NameTask={card.title} date={card.date} key = {card.id} />)}
      </div>
    </div>
  );
}
