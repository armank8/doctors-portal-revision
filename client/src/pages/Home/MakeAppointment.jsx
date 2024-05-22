import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../shared/PrimaryButton";
export default function MakeAppointment() {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make and Appointment today</h2>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis odit
          voluptates veniam vitae beatae perferendis possimus dolore doloribus
          reprehenderit sit? Eos culpa, saepe qui soluta rerum perferendis
          placeat aspernatur, minus quod neque voluptatem vel tenetur illum at.
          Tenetur, voluptatibus unde?
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
}
