import useAllServices from "../hooks/useAllServices";

export default function Services() {
  const [services] = useAllServices();
  console.log(services);
  return (
    <div className=" gap-5 grid grid-cols-3 ">
      {services.map((service, index) => (
        <div key={index + 1} className="hero bg-[#FFFF] hover:bg-[#CAEB66] text-[#03373D] min-h-screen rounded-3xl">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
