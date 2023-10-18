import React, { Component } from 'react';
import AxiosAPI from '../API/AxiosAPI';

class RegisterForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
         confirmPassword: '',
         passwordError: '',
      };
   }

   handleInputChange = (e) => {
      this.setState(
         {
            [e.target.name]: e.target.value,
         },
         () => {
            if (
               e.target.name === 'password' ||
               e.target.name === 'confirmPassword'
            ) {
               this.validatePassword();
            }
         }
      );
   };

   validatePassword = () => {
      const { password, confirmPassword } = this.state;
      if (password !== confirmPassword) {
         this.setState({
            passwordError: 'Password does not match',
         });
      } else {
         this.setState({
            passwordError: '',
         });
      }
   };

   handleSubmit = async (e) => {
      e.preventDefault();

      const { email, password } = this.state;
      console.log('Email: ' + email + '\nPassword: ' + password);

      const data = {
         email: this.state.email,
         password: this.state.password,
      };

      try {
         const response = await AxiosAPI.post('http://localhost:8080/users', data);

         console.log("Réponse du serveur: ", response);
      } catch (error) {
         console.error("Erreur lors de la requête: ", error);
      }
   };

   render() {
      return (
         <form onSubmit={this.handleSubmit} className="w-64 md:w-72 xl:w-96 md:xl:mx-8">
            <div className="relative w-full mb-8 group">
               <input
                  type="email"
                  name="email"
                  id="floating_email_register"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  value={this.state.email}
                  onChange={this.handleInputChange}
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
                  name="password"
                  id="floating_password_register"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  value={this.state.password}
                  onChange={this.handleInputChange}
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
                  name="confirmPassword"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Confirm password
               </label>
               <p className="text-red-500 text-sm">
                  {this.state.passwordError}
               </p>
            </div>
            <div className="flex justify-center mb-8">
               <button
                  type="submit"
                  className="w-full text-white bg-[#28c27a] hover:bg-[#59a96a] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={this.handleSubmit}
               >
                  Register new account
               </button>
            </div>
         </form>
      );
   }
}

export default RegisterForm;
