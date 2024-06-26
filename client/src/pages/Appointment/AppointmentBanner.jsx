import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function AppointmentBanner({ date, setDate }) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="chi" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
}
