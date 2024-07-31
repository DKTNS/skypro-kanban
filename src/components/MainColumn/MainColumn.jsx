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
            topic={card.topic}
            title={card.title}
            date={card.date}
            key={card.id}
            id={card.id}
          />
        ))}
      </MCO.MainColumnCards>
    </MCO.MainColumn>
  );
}
