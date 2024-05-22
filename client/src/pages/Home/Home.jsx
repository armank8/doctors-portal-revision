import Footer from "../shared/Footer";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";


export default function Home() {
  return (
    <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
        <Footer></Footer>
    </div>
  )
}
