import { Table } from 'flowbite-react';

const AdminTable = () => {
   return (
      <section class="bg-gray-50 p-3 sm:p-5">
         <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <div class="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
               <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div class="w-full md:w-1/2">
                     <form class="flex items-center">
                        <label for="simple-search" class="sr-only">
                           Search
                        </label>
                        <div class="relative w-full">
                           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg
                                 aria-hidden="true"
                                 class="w-5 h-5 text-gray-500"
                                 fill="currentColor"
                                 viewbox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                 />
                              </svg>
                           </div>
                           <input
                              type="text"
                              id="simple-search"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                              placeholder="Search"
                              required=""
                           />
                        </div>
                     </form>
                  </div>
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                     <button
                        type="button"
                        class="flex items-center justify-center text-white bg-[#28c27a] hover:bg-[#59a96a] font-medium rounded-lg text-sm px-4 py-2"
                     >
                        <svg
                           class="w-3.5 h-3.5 mr-4 text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 18 18"
                        >
                           <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                           />
                        </svg>
                        Add User
                     </button>
                     <div class="flex items-center space-x-3 w-full md:w-auto">
                        <button
                           id="filterDropdownButton"
                           data-dropdown-toggle="filterDropdown"
                           class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10"
                           type="button"
                        >
                           <svg
                              class="w-4 h-4 mr-2 text-gray-800"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 18"
                           >
                              <path d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z" />
                           </svg>
                           Filter
                           <svg
                              class="-mr-1 ml-1.5 w-5 h-5"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                           >
                              <path
                                 clip-rule="evenodd"
                                 fill-rule="evenodd"
                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              />
                           </svg>
                        </button>
                        <div
                           id="filterDropdown"
                           class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow"
                        >
                           <h6 class="mb-3 text-sm font-medium text-gray-900">
                              Choose brand
                           </h6>
                           <ul
                              class="space-y-2 text-sm"
                              aria-labelledby="filterDropdownButton"
                           >
                              <li class="flex items-center">
                                 <input
                                    id="apple"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                                 />
                                 <label
                                    for="apple"
                                    class="ml-2 text-sm font-medium text-gray-900"
                                 >
                                    Apple (56)
                                 </label>
                              </li>
                              <li class="flex items-center">
                                 <input
                                    id="fitbit"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                                 />
                                 <label
                                    for="fitbit"
                                    class="ml-2 text-sm font-medium text-gray-900"
                                 >
                                    Microsoft (16)
                                 </label>
                              </li>
                              <li class="flex items-center">
                                 <input
                                    id="razor"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                                 />
                                 <label
                                    for="razor"
                                    class="ml-2 text-sm font-medium text-gray-900"
                                 >
                                    Razor (49)
                                 </label>
                              </li>
                              <li class="flex items-center">
                                 <input
                                    id="nikon"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                                 />
                                 <label
                                    for="nikon"
                                    class="ml-2 text-sm font-medium text-gray-900"
                                 >
                                    Nikon (12)
                                 </label>
                              </li>
                              <li class="flex items-center">
                                 <input
                                    id="benq"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                                 />
                                 <label
                                    for="benq"
                                    class="ml-2 text-sm font-medium text-gray-900"
                                 >
                                    BenQ (74)
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500">
                     <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                           <th scope="col" class="px-4 py-3">
                              Email
                           </th>
                           <th scope="col" class="px-4 py-3">
                              Name
                           </th>
                           <th scope="col" class="px-4 py-3">
                              Last Name
                           </th>
                           <th scope="col" class="px-4 py-3">
                              Hash Password
                           </th>
                           <th scope="col" class="px-4 py-3">
                              <span class="sr-only">Actions</span>
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr class="border-b">
                           <th
                              scope="row"
                              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                           >
                              Email.1@gmail.com
                           </th>
                           <td class="px-4 py-3">Emma</td>
                           <td class="px-4 py-3">Dupont</td>
                           <td class="px-4 py-3">5f4dcc3b</td>

                           <td class="px-4 py-3 flex items-center justify-end">
                              <button
                                 id="apple-imac-27-dropdown-button"
                                 data-dropdown-toggle="apple-imac-27-dropdown"
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
                                 id="apple-imac-27-dropdown"
                                 class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                              >
                                 <ul
                                    class="py-1 text-sm text-gray-700"
                                    aria-labelledby="apple-imac-27-dropdown-button"
                                 >
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Show
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Edit
                                       </a>
                                    </li>
                                 </ul>
                                 <div class="py-1">
                                    <a
                                       href="#"
                                       class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                       Delete
                                    </a>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr class="border-b">
                           <th
                              scope="row"
                              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                           >
                              Email.2@gmail.com
                           </th>
                           <td class="px-4 py-3">Lucas</td>
                           <td class="px-4 py-3">Martin</td>
                           <td class="px-4 py-3">098f6bcd</td>
                           <td class="px-4 py-3 flex items-center justify-end">
                              <button
                                 id="apple-imac-20-dropdown-button"
                                 data-dropdown-toggle="apple-imac-20-dropdown"
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
                                 id="apple-imac-20-dropdown"
                                 class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                              >
                                 <ul
                                    class="py-1 text-sm text-gray-700"
                                    aria-labelledby="apple-imac-20-dropdown-button"
                                 >
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Show
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Edit
                                       </a>
                                    </li>
                                 </ul>
                                 <div class="py-1">
                                    <a
                                       href="#"
                                       class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                       Delete
                                    </a>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr class="border-b">
                           <th
                              scope="row"
                              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                           >
                              Email.3@gmail.com
                           </th>
                           <td class="px-4 py-3">Sarah</td>
                           <td class="px-4 py-3">Johnson</td>
                           <td class="px-4 py-3">0192023a</td>
                           <td class="px-4 py-3 flex items-center justify-end">
                              <button
                                 id="apple-iphone-14-dropdown-button"
                                 data-dropdown-toggle="apple-iphone-14-dropdown"
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
                                 id="apple-iphone-14-dropdown"
                                 class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                              >
                                 <ul
                                    class="py-1 text-sm text-gray-700"
                                    aria-labelledby="apple-iphone-14-dropdown-button"
                                 >
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Show
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Edit
                                       </a>
                                    </li>
                                 </ul>
                                 <div class="py-1">
                                    <a
                                       href="#"
                                       class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                       Delete
                                    </a>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr class="border-b">
                           <th
                              scope="row"
                              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                           >
                              Email.4@gmail.com
                           </th>
                           <td class="px-4 py-3">Alexandre</td>
                           <td class="px-4 py-3">Lefebvre</td>
                           <td class="px-4 py-3">098f6bcd</td>
                           <td class="px-4 py-3 flex items-center justify-end">
                              <button
                                 id="apple-ipad-air-dropdown-button"
                                 data-dropdown-toggle="apple-ipad-air-dropdown"
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
                                 id="apple-ipad-air-dropdown"
                                 class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                              >
                                 <ul
                                    class="py-1 text-sm text-gray-700"
                                    aria-labelledby="apple-ipad-air-dropdown-button"
                                 >
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Show
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Edit
                                       </a>
                                    </li>
                                 </ul>
                                 <div class="py-1">
                                    <a
                                       href="#"
                                       class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                       Delete
                                    </a>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr class="border-b">
                           <th
                              scope="row"
                              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                           >
                              Email.5@gmail.com
                           </th>
                           <td class="px-4 py-3">Emily</td>
                           <td class="px-4 py-3">Walker</td>
                           <td class="px-4 py-3">098f6bcd</td>
                           <td class="px-4 py-3 flex items-center justify-end">
                              <button
                                 id="xbox-series-s-dropdown-button"
                                 data-dropdown-toggle="xbox-series-s-dropdown"
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
                                 id="xbox-series-s-dropdown"
                                 class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                              >
                                 <ul
                                    class="py-1 text-sm text-gray-700"
                                    aria-labelledby="xbox-series-s-dropdown-button"
                                 >
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Show
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Edit
                                       </a>
                                    </li>
                                 </ul>
                                 <div class="py-1">
                                    <a
                                       href="#"
                                       class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                       Delete
                                    </a>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr class="border-b">
                           <th
                              scope="row"
                              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                           >
                              Email.6@gmail.com
                           </th>
                           <td class="px-4 py-3">Thomas</td>
                           <td class="px-4 py-3">Garcia</td>
                           <td class="px-4 py-3">098f6bcd</td>
                           <td class="px-4 py-3 flex items-center justify-end">
                              <button
                                 id="playstation-5-dropdown-button"
                                 data-dropdown-toggle="playstation-5-dropdown"
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
                                 id="playstation-5-dropdown"
                                 class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                              >
                                 <ul
                                    class="py-1 text-sm text-gray-700"
                                    aria-labelledby="playstation-5-dropdown-button"
                                 >
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Show
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="#"
                                          class="block py-2 px-4 hover:bg-gray-100"
                                       >
                                          Edit
                                       </a>
                                    </li>
                                 </ul>
                                 <div class="py-1">
                                    <a
                                       href="#"
                                       class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                       Delete
                                    </a>
                                 </div>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <nav
                  class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                  aria-label="Table navigation"
               >
                  <span></span>
                  <ul class="inline-flex items-stretch -space-x-px">
                     <li>
                        <a
                           href="#"
                           class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                           <span class="sr-only">Previous</span>
                           <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fill-rule="evenodd"
                                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                 clip-rule="evenodd"
                              />
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-white bg-[#28c27a] border border-primary-300 hover:bg-[#59a96a]"
                        >
                           1
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                           2
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           aria-current="page"
                           class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                           3
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                           ...
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                           100
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                           <span class="sr-only">Next</span>
                           <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fill-rule="evenodd"
                                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                 clip-rule="evenodd"
                              />
                           </svg>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </section>
   );
};

export default AdminTable;
