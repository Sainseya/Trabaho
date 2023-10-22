import { useState, useCallback, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { toast, Toaster } from 'react-hot-toast';
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const currentUser = AuthService.getCurrentUser();
  let navigate = useNavigate();

  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);


  const logOut = () => {
    AuthService.logout().then(() => {
      toast.success('A bientôt');
      navigateToAuthPage();
    });
  }

  const navigateToAuthPage = () =>{
    // window.location.reload();
    navigate('/');
 }

  return (
    <div className="flex bg-gris z-50 px-4 sm:px-8 md:px-16 lg:px-20 w-full items-center h-10 sm:h-20 border-b-2 fixed text-white">
      <Toaster />
      <div className="flex-auto sm:text-3xl text-base sm:font-normal font-medium">
        Trabaho
      </div>
      {currentUser ? (
        <div className="flex-col items-end">
          <div className="flex flex-row items-center gap-2 justify-end" onClick={toggleOpen}>
            <div>
              <RxHamburgerMenu size={20} />
            </div>
            <div>
              <BiUserCircle size={26} />
            </div>
          </div>
          {isOpen && (
            <div className="
              absolute
              shadow-md
              bg-white
              overflow-hidden
              top-16
              text-sm
              xl:w-[20vh]
              xl:right-20
              md:right-16
              sm:right-30
              rounded-md
              aligne
            ">
              <div className="flex flex-col cursor-pointer text-zinc-950 items-center gap-1 py-2 bg-blanc_creme">
                <button onClick={logOut}>Logout</button>
                <div onClick={""}>Edit profil</div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          Connecter
        </div>
      )}
    </div>
  );
};

export default Header;
