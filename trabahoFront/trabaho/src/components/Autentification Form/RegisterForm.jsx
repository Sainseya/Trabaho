import React, { Component } from 'react';
import axios from 'axios';

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

   handleSubmit = (e) => {
      e.preventDefault();

      const { email, password } = this.state;
      console.log('Email: ' + email + '\nPassword: ' + password);

      const data = {
         email: this.state.email,
         password: this.state.password,
      };

      axios
         .post('http://localhost:8080/users', data)
         .then((response) => {
            //* Reponse serveur ici
            console.log('Réponse du serveur: ', response.data);
         })
         .catch((error) => {
            //* Gérer les erreur ici
            console.error('Erreur lors de la requête: ', error);
         });
   };

   render() {
      return (
         <form onSubmit={this.handleSubmit} className="md:w-72 mx-8">
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
               <p className="text-red-500 text-sm">{this.state.passwordError}</p>
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
                  onClick={this.handleSubmit}
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
                        fillRule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clipRule="evenodd"
                     />
                  </svg>
                  Register with Google
               </button>
            </div>
         </form>
      );
   }
}

export default RegisterForm;
