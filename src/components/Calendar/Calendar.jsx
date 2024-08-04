import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { CalendarR, CategoriesP, ChooseDate } from "./Calendar.syled";

export const Calendar = ({ selectedDate, setSelectedDate }) => {
  let footer = <ChooseDate>Пожалуйста, выберите дату</ChooseDate>;
  if (selectedDate) {
    footer = (
      <ChooseDate>
        Вы выбрали {format(selectedDate, "PP", { locale: ru })}
      </ChooseDate>
    );
  }
  return (
    <CalendarR>
      <CategoriesP>Даты</CategoriesP>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        footer={footer}
        /* locale={ru} */
      />
    </CalendarR>
  );
};

/* export function MyDatePicker() {
  const [selected, setSelected] = useState();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
} */
// rdp-button_reset rdp-button rdp-day
