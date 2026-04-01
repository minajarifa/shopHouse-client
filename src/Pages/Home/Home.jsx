import Banner from "../../Components/Banner";
import Services from "../../Components/Services";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      {/* servises section */}
      <div className="bg-[#03373D] rounded-3xl p-10">
        <div className="m-5">
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
