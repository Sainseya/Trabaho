const InputField = ({ icon, placeholder, registerKey, register, errors }) => (
   <div className="flex flex-1 flex-row gap-2 items-center px-2 bg-white w-full h-11 rounded-md">
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
