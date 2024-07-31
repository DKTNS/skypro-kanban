import Card from "../Card/Card";
import * as MCO from "./MainColumn.Styled";

export default function MainColumn({ title, cardList }) {
  return (
    <MCO.MainColumn>
      <MCO.ColumnTitle>
        <p>{title}</p>
      </MCO.ColumnTitle>
      <MCO.MainColumnCards>
        {cardList.map((card) => (
          <Card
          key={card._id}
          topic={card.topic}
          title={card.title}
          date={card.date}
          _id={card._id}
          />
        ))}
      </MCO.MainColumnCards>
    </MCO.MainColumn>
  );
}
