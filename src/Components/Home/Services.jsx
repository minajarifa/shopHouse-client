import useAllServices from "../../hooks/useAllServices";

export default function Services() {
  const [services] = useAllServices();
  console.log(services);
  return (
    <div className=" gap-5 grid grid-cols-3 ">
      {services.map((service, index) => (
        <div
          key={index + 1}
          className="bg-[#FFFF] hover:bg-[#CAEB66] text-[#03373D] p-10 rounded-3xl"
        >
          <div className="flex justify-center items-center  ">
            <img src={`/src/assets/service.png`} alt="" />
          </div>
          <div className="hero rounded-3xl">
            <div className="hero-content text-center">
              <div className="">
                <h1 className="text-4xl font-bold">{service?.title}</h1>
                <p className="py-6">
                 {service?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
