import React, { useState } from 'react';

const Authentification = () => {
   const [isPanelOpen, setIsPanelOpen] = useState(false);

   const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
   };

   return (
      <div className="flex flex-row h-screen">
         <style>
            {`
          .panel-transition {
            transition: transform 0.3s ease;
          }

          .panel-open {
            transform: translateX(-100%);
          }

          .panel-closed {
            transform: translateX(0);
          }
        `}
         </style>

         <div id="left_Container" className="flex-1 my-8 ml-8">
            <div className="flex flex-col items-center justify-evenly h-full bg-[#e5ece9] rounded-l-2xl">
               <h2 className="mt-12 text-2xl">Welcome to Trabaho</h2>
               <form action="" className="xl:w-96  mx-8 ">
                  <div className="relative w-full mb-8 group">
                     <input
                        type="email"
                        name="floating_email"
                        id="floating_email_register"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                        placeholder=" "
                        required
                     />
                     <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                     >
                        Email address
                     </label>
                  </div>
                  <div className="relative w-full mb-8 group">
                     <input
                        type="password"
                        name="floating_password"
                        id="floating_password_register"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                        placeholder=" "
                        required
                     />
                     <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                     >
                        Password
                     </label>
                  </div>
                  <div className="relative w-full mb-8 group">
                     <input
                        type="password"
                        name="repeat_password"
                        id="floating_repeat_password"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                        placeholder=" "
                        required
                     />
                     <label
                        htmlFor="floating_repeat_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                     >
                        Confirm password
                     </label>
                  </div>
                  <div className="flex items-start mb-8">
                     <div className="flex items-center h-5">
                        <input
                           id="terms"
                           type="checkbox"
                           value=""
                           className="w-4 h-4"
                           required
                        />
                     </div>
                     <label
                        for="terms"
                        className="ml-2 text-sm font-medium text-black"
                     >
                        I agree with the{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                           terms and conditions
                        </a>
                     </label>
                  </div>
                  <div className="flex justify-center mb-8">
                     <button
                        type="submit"
                        className="w-full text-white bg-[#28c27a] hover:bg-[#59a96a] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                     >
                        Register new account
                     </button>
                  </div>
                  <div className="flex justify-center">
                     <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center text-white bg-[#28c27a] hover:bg-[#59a96a] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                     >
                        <svg
                           className="w-4 h-4 mr-2"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 18 19"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        Register with Google
                     </button>
                  </div>
               </form>
               <div className="flex justify-center mb-12">
                  <p>
                     Already have a account ?{' '}
                     <a
                        href=""
                        onClick={(e) => {
                           e.preventDefault();
                           togglePanel();
                        }}
                        className="text-blue-600 hover:underline"
                     >
                        Login here
                     </a>
                  </p>
               </div>
            </div>
         </div>
         <div id="right_container" className="flex-1 my-8 mr-8 relative">
            <div
               className={`absolute h-full w-full z-10 bg-[#216869] ${
                  isPanelOpen ? '' : 'mr-8'
               } ${isPanelOpen ? 'rounded-l-2xl' : 'rounded-r-2xl'} ${
                  isPanelOpen ? 'panel-open' : 'panel-closed'
               } panel-transition`}
            ></div>
            <div className="flex flex-col items-center justify-evenly bg-[#e5ece9] h-full rounded-r-2xl">
               <h2 className="mt-12 text-2xl">Welcome back</h2>
               <form action="" className="xl:w-96 mx-8">
                  <div className="relative w-full mb-8 group">
                     <input
                        type="email"
                        name="floating_email"
                        id="floating_email_login"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                        placeholder=" "
                        required
                     />
                     <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                     >
                        Email address
                     </label>
                  </div>
                  <div className="relative w-full mb-8 group">
                     <input
                        type="password"
                        name="floating_password"
                        id="floating_password_login"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                        placeholder=" "
                        required
                     />
                     <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                     >
                        Password
                     </label>
                  </div>
                  <div className="flex justify-center mb-8">
                     <button
                        type="submit"
                        className="w-full text-white bg-[#28c27a] hover:bg-[#59a96a] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                     >
                        Login
                     </button>
                  </div>
                  <div className="flex justify-center">
                     <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center text-white bg-[#28c27a] hover:bg-[#59a96a] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                     >
                        <svg
                           className="w-4 h-4 mr-2"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 18 19"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                              clip-rule="evenodd"
                           />
                        </svg>
                        Login with Google
                     </button>
                  </div>
               </form>
               <div className="flex justify-center mb-12">
                  <p>
                     Does not have a account ?{' '}
                     <a
                        href=""
                        onClick={(e) => {
                           e.preventDefault();
                           togglePanel();
                        }}
                        className="text-blue-600 hover:underline"
                     >
                        Sign in here
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Authentification;
