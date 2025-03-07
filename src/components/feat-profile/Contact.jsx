import { Link } from "react-router-dom";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

const Contact = () => {
  return (
    <NavbarDesktop>
      <div className="grow">
        <header>
          <div className="bg-sky-100 pb-14 md:bg-white md:py-5 pt-[60px] md:pt-[0] md:mt-[80px]">
            {/* <!-- Header (Notificaiton) --> */}
            <div className="grid grid-cols-3 w-full items-center">
              {/* <!-- Go back button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img
                  src="../../../public/chevron-left-solid.svg"
                  alt="Go Back"
                />
              </Link>
              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-lg md:text-3xl">
                <h2 className="">Contact Us</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-sky-100 md:bg-white h-full">
          <div className="flex flex-col gap-2 px-10 pt-8 bg-white rounded-t-3xl md:text-xl h-full">
            <h2 className="font-bold">Address</h2>
            <p className="text-gray-400">
              Siberian B. ซอยแสงอุษา แขวงโคโนฮะ เขตบางบอน กรุงเทพมหานคร 10700
            </p>

            <h2 className="font-bold">Call Center</h2>
            <p className="text-gray-400">02-1029-1094</p>
          </div>
        </main>
      </div>
    </NavbarDesktop>
  );
};

export default Contact;
