const Authentification = () => {
   return (
      <div className="flex flex-col items-center justify-center">
         <h2 className="mb-8 text-2xl">Welcome to Trabaho</h2>
         <form action="" className="w-96">
            <div class="relative w-full mb-6 group">
               <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Email address
               </label>
            </div>
            <div class="relative w-full mb-6 group">
               <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Password
               </label>
            </div>
            <div class="relative w-full mb-6 group">
               <input
                  type="password"
                  name="repeat_password"
                  id="floating_repeat_password"
                  class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="floating_repeat_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Confirm password
               </label>
            </div>
            <div class="flex items-start mb-6">
               <div class="flex items-center h-5">
                  <input
                     id="terms"
                     type="checkbox"
                     value=""
                     class="w-4 h-4"
                     required
                  />
               </div>
               <label
                  for="terms"
                  class="ml-2 text-sm font-medium text-black"
               >
                  I agree with the{' '}
                  <a
                     href="#"
                     class="text-blue-600 hover:underline"
                  >
                     terms and conditions
                  </a>
               </label>
            </div>
            <div className="flex justify-center mt-10">
               <button
                  type="submit"
                  class=" text-white bg-[#28c27a] hover:bg-[#59a96a] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
               >
                  Register new account
               </button>
            </div>
         </form>
      </div>
   );
};

export default Authentification;
