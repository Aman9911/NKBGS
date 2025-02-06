import HomePageModal from "./components/client/modals/HomePageModal";
import HeroBanner from "./components/client/HeroBanner";
import Carousel from "./components/client/Carousel";
import Message from "./components/client/Message";
import UpcomingEvents from "./components/client/UpcomingEvents";
import Infrastructure from "./components/client/Infrastructure/Infrastructure";
import Life from "./components/client/Life";
import Feedback from "./components/Feedback";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-black ">
      <HomePageModal />
      <div className="mt-14 md:mt-[4.5rem] lg:mt-[6rem]">
        <HeroBanner />
      </div>
      <div className="relative mt-10">
        <div className="space-x-0 space-y-4 w-[100%] max-w-[1200px] mx-auto flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:space-y-2 sm:space-x-2 gap-6 ">
          <Carousel />
        </div>
      </div>
      <div className="mt-16 relative">
      <div className="space-x-0 space-y-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:space-y-2 sm:space-x-2 gap-6">
      <Life/>
      </div>
      </div>      
      <div className="lg:flex lg:mx-[5%] mt-5 h-full">
        <div className="lg:max-w-[70%] ">
          <Message
            heading={"Welcome to N.K. Bagrodia Global School"}
            content={
              "Seth Sagarmal Bagrodia Charitable Trust is the apex body managing this school. Late Sh. N.K. Bagrodia , founder President, a Visionary, had a dream for providing quality education to the children from middle class and common citizens at a reasonable fee structure. He was a firm believer that quality education with holistic approach is the most important and effective instrument for transforming the society. We can only create a healthy society, where the people will be responsible socially and economically productive and patriotic with cultural root of the country and at the same time provide them the education keeping in view the fast changing scenario in global education. India cannot be at par with the developed countries unless our education standard becomes comparable with the international standards. N. K. Bagrodia Global School has been established with a mission to provide education with a global curriculum supported with world class infrastructure, faculty and progressive management."
            }
          />
        </div>
        <UpcomingEvents />
      </div>
      <div className="mt-16 relative">
      <div className="space-x-0 space-y-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:space-y-2 sm:space-x-2 gap-6">
      <Feedback/>
      </div>
      </div>
      <div className="relative mt-12 lg:mx-[5%]">
        <div className="space-x-0 space-y-4  mx-auto flex flex-col justify-center items-center md:flex-row md:flex-wrap md:space-y-2 md:space-x-2 ">
          <div className="relative  text-center">
            <div className="font-bold text-lg lg:text-3xl mb-2 md:text-3xl md:mb-6">
              <h1>INFRASTRUCTURAL HIGHLIGHTS</h1>
            </div>
            <div className="md:flex md:gap-x-8 md:px-3 md:flex-wrap md:justify-center md:items-center">
              <Infrastructure />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 relative">
      <div className="space-x-0 space-y-4 max-w-[1200px] mx-auto flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:space-y-2 sm:space-x-2 gap-6">
      <Image src="/images/design.png" alt="footer design" className="object-center" width={1024} height={1024} />
    </div>
    </div>
    </div>
  );
}
