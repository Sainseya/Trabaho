import{ Component, useState } from "react";
import Button from "../../Button";


const EditProfil = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  closeThisPanel = () => {
    this.props.onClose();
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();


    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
    };
    // console.log(data);

    try {
      //! Change URL of PUT
      //* const response = await AxiosAPI.put("http://localhost:8080/users/1", data);
      console.log("Réponse du serveur: ", response);
    } catch (error) {
      console.error("Erreur lors de la requête: ", error);
    }

    closeThisPanel();
  };

    return (
      <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-20 bg-blanc_creme bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <div className="relative bg-slate-50 w-2/4 p-6 rounded-lg shadow-md">
          <button
            className="absolute top-3 right-3 w-8 h-8 bg-red-600 border-2 rounded-full flex justify-center items-center"
            onClick={this.closeThisPanel}
          >
            <p className="text-white font-bold text-center">X</p>
          </button>
          <p className="flex justify-center items-center p-4 font-semibold text-lg">
            Edit your profil
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="firstName"
                  id="floating_email_register"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
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
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
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
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
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
                value={this.state.email}
                onChange={this.handleInputChange}
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
}

export default EditProfil;
