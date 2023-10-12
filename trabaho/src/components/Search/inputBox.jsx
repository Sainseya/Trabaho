const InputBox = ({ logo, placeholder }) => {
   return (
      <div className="flex flex-row gap-2 items-center px-2  bg-white w-48 h-11 rounded-md">
         <div className="flex items-center w-6 h-8">{{ logo }}</div>
         <input
            className="w-full border-none outline-none"
            placeholder={placeholder}
            {...register('jobTitle')}
         />

         {/* {errors.jobTitle && <span>This field is required</span>} */}
      </div>
   );
};

export default InputBox;
