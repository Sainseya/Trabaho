const InputField = ({ icon, placeholder, registerKey, register, errors }) => (
   <div className="flex flex-row gap-2 items-center px-2 md:w-28 md:h-8 bg-white sm:w-28 sm:h-9 xl:w-48 xl:h-11 w-48 h-11 rounded-md">
      <div className="flex items-center w-6 h-8">{icon}</div>
      <input
         className="w-full border-none outline-none"
         placeholder={placeholder}
         {...register(registerKey)}
      />
      {errors[registerKey] && <span>This field is required</span>}
   </div>
);
export default InputField;
