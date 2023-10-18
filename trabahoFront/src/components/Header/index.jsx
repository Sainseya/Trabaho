import { BiUserCircle } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
   return (
      <div className="flex bg-gris px-8 sm:px-24 w-full items-center h-10 sm:h-20 border-b-2 fixed text-white">
         <div className="flex-auto sm:text-5xl text-sm ">Trabaho</div>
         <div className="flex-auto flex-row gap-10 flex">
            {/* <p className="hover:text-bleu w-auto">Find your job</p> */}
            {/* <p className="hover:text-bleu">Saved Job</p> */}
         </div>

         <div className="flex-auto items-end ">
            <div className="flex flex-row items-center gap-1 justify-end">
               <div>
                  <RxHamburgerMenu size={20} />
               </div>
               <div className="">
                  <BiUserCircle size={25} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
