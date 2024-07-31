import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
//import "react-day-picker/style.css";
import ru from "date-fns/locale/ru";
import { CategoriesP, ChooseDate } from "./Calendar.syled";

export function Calendar({ selectedDate, setSelectedDate }) {
  let footer = (
    <ChooseDate>
      <p>Пожалуйста, выберите дату</p>
    </ChooseDate>
  );
  if (selectedDate) {
    footer = (
      <ChooseDate>
        Вы выбрали {format(selectedDate, "PP", { locale: ru })}
      </ChooseDate>
    );
  }
  return (
    <Calendar>
      <CategoriesP>Даты</CategoriesP>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        footer={footer}
        /* locale={ru} */
      />
    </Calendar>
  );
}

/* export function MyDatePicker() {
  const [selected, setSelected] = useState();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
} */
// rdp-button_reset rdp-button rdp-day
