import useAllServices from "../../hooks/useAllServices"


export default function Works() {
    const [ services]=useAllServices();
  return (
   <div className="grid grid-cols-3 gap-5">
    {
        services.map((service,index)=> <div key={index+1} className="p-10 bg-[#FFFF] rounded-3xl">
        <img src={`/src/assets/bookingIcon.png`} alt="" />
        <h3 className="text-center font-bold text-2xl m-5">{service?.title}</h3>
        <p className="text-center m-5">{service?.description}</p>
    </div>)
    }
   </div>
  )
}
