import Banner from "../../Components/Home/Banner";
import Services from "../../Components/Home/Services";
import Works from "../../Components/Home/Works";

export default function Home() {
 
  return (
    <div className="my-10">
     
      {/* banner */}
      <Banner></Banner>
      {/* How it works */}
      <div className="my-10">
        <h4 className="text-4xl p-5 font-bold">How it Works</h4>
        
        <Works></Works>
      </div>
      {/* servises section */}
      <div className="bg-[#03373D] rounded-3xl p-10">
        <div className="m-5 text-[#FFFF]">
          <h1 className="text-4xl text-center font-bold">Our Services</h1>
          <p className="text-center">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <Services></Services>
      </div>
    </div>
  );
}
