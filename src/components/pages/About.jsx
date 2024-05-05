import bg from "../../resources/abt_us.png";
import VideoPlayer from "../VideoPlayer";

export default function About() {
  return (
    <>

      {/* FIRST SECTION */}

      <div className="bg-cover-btm" style={{ backgroundImage: `url("${bg}")` }}>

        <div className="flex align-items-center justify-content-center px-8">
          {/* <div className="background-image" style={{ backgroundImage: `url("${bg}")` }}></div> */}
          <div className="flex flex-1 w-full lg:w-8 p-4 xl:p-8 xl:mx-8">
            <div className="flex bg-black-alpha-50">
              <div className="px-8 flex flex-column justify-content-center text-center mb-3">
              <span
                className="flex justify-content-center text-4xl lg:text-6xl font-bold text-primary text-center uppercase"
                style={{ textShadow: "-2px 2px 4px #ffffff" }}
              >
                Mission
              </span>
              <span
                className="block text-lg lg:text-3xl font-light text-white text-justify line-height-3"
              >
                Pawpal aims to work in ensuring the prevention of cruelty and
                suffering of animals. It strives towards protection and promotion
                of their welfare by advocating an improvement to their living
                conditions, by campaigning to eliminate causes that bring about
                pain and discomfort to the animals. Pawpal will work towards a
                symbiotic, harmonious and healthy environment for both humans and
                animals.
              </span>
              </div>
            </div>
          </div>
        </div>

      {/* SECOND SECTION */}

        <div className="flex align-items-center justify-content-center px-8">
          {/* <div className="background-image" style={{ backgroundImage: `url("${bg2}")` }}></div> */}
          <div className="flex flex-1 w-full lg:w-8 p-4 xl:p-8 xl:mx-8">
          {/* <div className="flex flex-column justify p-8 text-center md:text-center justify-content-center align-items-center relative"> */}
            <div className="flex bg-black-alpha-50">
              <div className="px-8 flex flex-column justify-content-center text-center mb-3">
              <span
                className="flex justify-content-center text-4xl lg:text-6xl font-bold text-primary text-center uppercase"
                style={{ textShadow: "-2px 2px 4px #ffffff" }}
              >
                ENDING THE DOG MEAT TRADE
              </span>
              <span
                className="block text-lg lg:text-3xl font-light text-white text-justify line-height-3"
              >
                The cruel dog meat trade is one of the most serious animal welfare
                concerns in the Philippines. No animal on earth deserves the
                treatment that dog butchers and animal abusers give to these
                innocent dogs.
              </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* THIRD SECTION */}

      <div className="flex justify-content-center flex-wrap p-4 xl:px-8 gap-3">
        <div className="flex flex-column w-4 xl:pl-8 py-4">
            <span
              className="flex font-x-large xxl:text-6xl font-light text-black text-center md:text-left"
              style={{ textShadow: "-2px 2px 4px #ffffff" }}
            >
              Exploring Canine Health: Insights for Pet Owners
            </span>
            <span
              className="flex text-1xl font-light text-black text-center md:text-left"
              style={{ textShadow: "-2px 2px 4px #ffffff" }}
            >
              Discover valuable insights into the health of our canine companions in this informative video. From identifying symptoms to understanding preventative measures, learn how to ensure the well-being of your furry friend. Join us as we explore important aspects of dog health that every pet owner should know.
            </span>
        </div>

        <div className="flex flex-column py-4 pr-4 lg:pr-8">
          <VideoPlayer
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
