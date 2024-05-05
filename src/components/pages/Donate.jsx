import bg from "../../resources/dog-looking-at-you.jpg";
import gcash from "../../resources/pawpal_qr.jpg";
import { Card } from "primereact/card";

export default function Donate() {
  const header = <img alt="Card" src={gcash} />;



  return (
    <>
      <div className="flex justify-content-between bg-no-repeat bg-cover-btm" style={{ backgroundImage: `url("${bg}")` }}>
        <div className="flex flex-column w-full lg:w-6 lg:mx-8 lg:p-8 py-8 px-4">
          {/* <div className="flex bg-black-alpha-50 p-4 h-fit"> */}
            <span
              className="flex font-xxx-large lg:text-6xl font-light text-white"
              style={{ textShadow: "-2px 2px 4px #000000" }}
            >
              Scan to save lives.
            </span>
            <span
              className="flex font-xxx-large lg:text-6xl font-bold text-white"
              style={{ textShadow: "-2px 2px 4px #000000" }}
            >
              Support pet adoption today.
            </span>
        </div>
        {/* </div> */}

        <div className="flex w-full lg:w-6 p-8">
          <Card header={header} className="md:w-20rem">
            <p className="m-1 text-center text-xs lg:text-base">
              All of the donations will go to the rescues' shelter.
            </p>
          </Card>
        </div>
      </div>

      <Footer/>
    </>
  );
}

function Footer() {

  return (
    <div className="bg-bluegray-800 p-8 w-full">
      <span
        className="flex justify-content-left text-lg lg:text-3xl font-bold text-white text-center lg:px-8 lg:mx-8"
      >
        Make a Difference Today
      </span>
      <span className="flex justify-content-left text-lg lg:text-1xl font-light text-white text-left lg:px-8 lg:mx-8">
        Every contribution counts towards creating a better life for our furry companions. Our dedicated team works tirelessly to provide essential care for our dogs, ensuring they receive the love, attention, and support they deserve.
        Your donation sustains our efforts to nurture and protect these precious souls, making a tangible impact on their lives. Join us in our mission to create a brighter future for every dog in our care.
      </span>
    </div>
  );
}
