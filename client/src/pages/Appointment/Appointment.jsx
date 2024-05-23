import { useState } from "react";
import Footer from "../shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

export default function Appointment() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments
        date={date}
        setDate={setDate}
      ></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
}
