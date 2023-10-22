function FilterSelect({ icon, id, name, options, register }) {
   return (
      <div className="filter-item">
         <div className="icon">{icon}</div>
         <select
            id={id}
            name={name}
            className="w-full border-none bg-white outline-none"
            {...register(name)}
         >
            {options.map((option) => (
               <option key={option.value} value={option.value}>
                  {option.label}
               </option>
            ))}
         </select>
      </div>
   );
}

export default FilterSelect;
