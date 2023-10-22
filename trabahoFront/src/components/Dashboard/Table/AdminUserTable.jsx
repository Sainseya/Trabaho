import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FilterType from "./FilterType";
import TableUserRowData from "./TableUserRowData";
import get from "../../API/get";
import AddUserPopup from "../AddUserPopup";

const AdminUserTable = () => {
  const [addUser, setAddUser] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 6;

  const data = get();

  // Access the values from the returned object
  const { users } = data;

  const offset = currentPage * usersPerPage;
  // const currentUsers = users.slice(offset, offset + usersPerPage);

  const handleButtonClick = () => {
    setAddUser(true);
  };

  const handleClose = () => {
    setAddUser(false);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section class="p-4">
      <div class="mx-auto max-w-screen-xl">
        <div class="bg-white  border border-gray-200 relative shadow-md rounded-lg overflow-hidden">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-1/2">
              <form class="flex items-center">
                <label for="simple-search-Users" class="sr-only">
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
                onClick={handleButtonClick}
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
                  id="filterUserDropdownButton"
                  data-dropdown-toggle="filterUserDropdown"
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
                  id="filterUserDropdown"
                  class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow"
                >
                  <h6 class="mb-3 text-sm font-medium text-gray-900">
                    Choose a filter
                  </h6>
                  <ul
                    class="space-y-2 text-sm"
                    aria-labelledby="filterUserDropdownButton"
                  >
                    <FilterType type="Test" />
                    <FilterType />
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
                {users.map((user, userId) => (
                  <TableUserRowData
                    key={userId}
                    userId={user.userId}
                    email={user.email}
                    firstName={user.firstname}
                    lastName={user.lastname}
                    password={user.password}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <nav
            class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span></span>
            <div className="inline-flex items-stretch -space-x-px pagination">
              <ReactPaginate
                previousLabel={"<"}
                previousClassName="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 text-white bg-[#28c27a] rounded-l-lg border border-gray-300 hover:bg-[#59a96a]"
                nextLabel={">"}
                nextClassName="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-white bg-[#28c27a] rounded-r-lg border border-gray-300 hover:bg-[#59a96a]"
                breakLabel={"..."}
                breakClassName="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                pageCount={Math.ceil(users.length / usersPerPage)}
                pageClassName="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName="pagination flex"
                activeClassName="activePage text-white pointer-events-none"
              />
            </div>
          </nav>
        </div>
      </div>
      {addUser && <AddUserPopup onClose={handleClose}/>}
    </section>
  );
};

export default AdminUserTable;
