import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

export default function Services() {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo, iste itaque omnis nemo deleniti veritatis impedit eius quae sed?",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo, iste itaque omnis nemo deleniti veritatis impedit eius quae sed?",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo, iste itaque omnis nemo deleniti veritatis impedit eius quae sed?",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      {/* section heading */}
      <div className="text-center">
        <h3 className="text-primary  text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services we Provide</h2>
      </div>
      {/* services */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      {/* Dental care section */}
      <div>
        <div className=" max-w-7xl mx-auto my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <img
              src={treatment}
              className="md:max-w-sm sm:max-w-lg rounded-lg shadow-2xl flex justify-center"
            />
            
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
              <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
