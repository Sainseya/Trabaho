import deleteUser from '../../API/delete';

const TableUserRowData = ({
   userId,
   email,
   firstName,
   lastName,
   password,
}) => {

   const handleDelete = ({userId}) =>{
      // alert(userId)
      deleteUser(userId)
   }

   return (
      <tr class="border-b">
         <th
            scope="row"
            class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
         >
            {email}
         </th>

         <td class="px-4 py-3">{firstName}</td>
         <td class="px-4 py-3">{lastName}</td>
         <td class="px-4 py-3">{password}</td>

         <td class="px-4 py-3 flex items-center justify-end">
            <button
               id={`${userId}-dropdown-button`}
               data-dropdown-toggle={`${userId}-dropdown`}
               class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
               type="button"
            >
               <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
               </svg>
            </button>
            <div
               id={`${userId}-dropdown`}
               class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
            >
               <ul
                  class="py-1 text-sm text-gray-700"
                  aria-labelledby={`${userId}-dropdown-button`}
               >
                  <li>
                     <a href="#" class="block py-2 px-4 hover:bg-gray-100">
                        Edit
                     </a>
                  </li>
               </ul>
               <div class="py-1">
                  <a
                     href="#"
                     class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                     onClick={handleDelete({userId})}
                  >
                     Delete
                  </a>
               </div>
            </div>
         </td>
      </tr>
   );
};

export default TableUserRowData;
