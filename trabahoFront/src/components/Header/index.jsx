import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex bg-gris z-50 px-4 sm:px-8 md:px-16 lg:px-20 w-full items-center h-10 sm:h-20 border-b-2 fixed text-white">
      <div className="flex-auto sm:text-3xl text-base sm:font-normal font-medium">
        Trabaho
      </div>
      <div className="flex-auto items-end ">
        <div className="flex flex-row items-center gap-2 justify-end">
          {/* <div>
                  <RxHamburgerMenu size={20} />
               </div> */}
          <div className="">
            <BiUserCircle size={26} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
