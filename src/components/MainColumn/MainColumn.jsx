import Card from "../Card/Card";
import * as MCO from "./MainColumn.Styled";

 function MainColumn({ title, cardList }) {
  return (
    <MCO.MainColumn>
        <MCO.ColumnTitle>
            <MCO.ColumnTitleP>{title}</MCO.ColumnTitleP>
        </MCO.ColumnTitle>
        <MCO.Cards>
            {cardList.map((card) =>
                <Card
                    topic={card.topic}
                    title={card.title}
                    date={card.date}
                    key={card._id}
                    id={card._id}
                />)}
        </MCO.Cards>
    </MCO.MainColumn>
);
}

export default MainColumn;
