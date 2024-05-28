import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
//import "react-day-picker/style.css";
import ru from "date-fns/locale/ru";

export function Calendar({ selectedDate, setSelectedDate }) {
  
  let footer = <p>Пожалуйста, выберите дату</p>;
  if (selectedDate) {
    footer = <p>Вы выбрали {format(selectedDate, "PP", { locale: ru })}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
      /* locale={ru} */
    />
  );
}

/* export function MyDatePicker() {
  const [selected, setSelected] = useState();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
} */
