const FilterType = ({type = "Default"}) => {
   return (
      <li class="flex items-center">
         <input
            id={type}
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
         />
         <label for="apple" class="ml-2 text-sm font-medium text-gray-900">
            {type}
         </label>
      </li>
   );
};

export default FilterType;
