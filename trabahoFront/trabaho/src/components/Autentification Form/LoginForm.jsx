const LoginForm = () => {

   return (
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
   );
};

export default LoginForm;
