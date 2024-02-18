import CardsItemGreen from "../cards/CardsItemGreen";
import CardsItemOrange from "../cards/CardsItemOrange";
import CardsItemViolet from "../cards/CardsItemViolet";

function ColumnWellDone({ StatusCard }) {
    return (
        <div className="main__column">
            <div className="column__title">
                <p>{StatusCard}</p>
            </div>

            <CardsItemGreen ColorAndSla={"Research"} TaskName={"Название задачи"} CardDate={"30.10.23"} />

        </div>
    )
}

export default ColumnWellDone;