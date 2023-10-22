import { useState } from "react";
import Button from "../../Button";
import UserService from "../../../services/user.service";
import { toast, Toaster } from "react-hot-toast";

const EditProfil = ({ onClose, setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");

  const userData = {
    username,
    phone,
    email,
    lastname,
  }


  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    UserService.updateUser(userData)
      .then((response) => {
        toast.success("Update succes");
        setCurrentUser(response.data);
        onClose();
      })
      .catch((error) => {
        toast.error(`Error`);
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setCurrentUser(_content);
      });
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-20 bg-blanc_creme bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <Toaster />
      <div className="relative bg-slate-50 w-2/4 p-6 rounded-lg shadow-md">
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-red-600 border-2 rounded-full flex justify-center items-center"
          onClick={onClose}
        >
          <p className="text-white font-bold text-center">X</p>
        </button>
        <p className="flex justify-center items-center p-4 font-semibold text-lg">
          Edit your profil
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="firstName"
                id="floating_email_register"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                value={username}
                onChange={onChangeUsername}
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lastName"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                value={lastname}
                onChange={onChangeLastname}
                placeholder=" "
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="phoneNumber"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
              value={phone}
              onChange={onChangePhone}
              placeholder=" "
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
              value={email}
              onChange={onChangeEmail}
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="flex justify-center items-center">
            <Button name="Save" width="7rem" height="3rem" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfil;
