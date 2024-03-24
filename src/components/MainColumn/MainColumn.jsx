import Card from "../Card/Card";


export default function MainColumn({ title, cardList }) {
  return (
    <div class="main__column column">
      <div class="column__title">
        <p>{title}</p>
      </div>
      <div class="cards">
        {cardList.map((card) => <Card StatusTask={card.theme} NameTask={card.title} date={card.date} key = {card.id} />)}
      </div>
    </div>
  );
}
