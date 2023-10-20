import Button from "../../Button";

const EditProfil = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //? Login update Profil in database
    onClose();
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-20 bg-blanc_creme bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <div className=" bg-slate-50 w-2/4 p-6 rounded-lg shadow-md">
        <p className="flex justify-center items-center pb-4 font-semibold text-lg">Edit your profil</p>
        <form>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="flex justify-center items-center">
            <Button
              name="Save"
              width="7rem"
              height="2.5rem"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfil;
