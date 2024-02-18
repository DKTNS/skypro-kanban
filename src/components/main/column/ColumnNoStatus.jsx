import CardsItemGreen from "../cards/CardsItemGreen";
import CardsItemOrange from "../cards/CardsItemOrange";
import CardsItemViolet from "../cards/CardsItemViolet";


function ColumnNoStatus({ StatusCard }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{StatusCard}</p>
            </div>
            <div className="cards">

                <CardsItemOrange ColorAndSla={"WebDesign"} TaskName={"Название задачи"} CardDate={"30.10.23"} />

                <CardsItemGreen ColorAndSla={"Research"} TaskName={"Название задачи"} CardDate={"30.10.23"} />

                <CardsItemOrange ColorAndSla={"WebDesign"} TaskName={"Название задачи"} CardDate={"30.10.23"} />

                <CardsItemViolet ColorAndSla={"Copywriting"} TaskName={"Название задачи"} CardDate={"30.10.23"} />

                <CardsItemOrange ColorAndSla={"WebDesign"} TaskName={"Название задачи"} CardDate={"30.10.23"} />
            </div>
        </div>
    )
}
export default ColumnNoStatus;