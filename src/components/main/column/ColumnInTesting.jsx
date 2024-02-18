import CardsItemGreen from "../cards/CardsItemGreen";
import CardsItemOrange from "../cards/CardsItemOrange";
import CardsItemViolet from "../cards/CardsItemViolet";

function ColumnInTesting({ StatusCard }) {
    return (
        <div className="main__column">
            <div className="column__title">
                <p>{StatusCard}</p>
            </div>
            <div className="cards">

                <CardsItemGreen ColorAndSla={"Research"} TaskName={"Название задачи"} CardDate={"30.10.23"} />

            </div>
        </div>
    )
}

export default ColumnInTesting;
