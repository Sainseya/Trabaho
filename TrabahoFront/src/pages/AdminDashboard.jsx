import React, { useState } from "react";
import CardStats from "../components/Dashboard/CardStats";
import AdminUserTable from "../components/Dashboard/Table/AdminUserTable";
import AdminJobsTable from "../components/Dashboard/Table/AdminJobsTable";
import get from "../components/API/get";

const AdminDashboard = () => {
  const [showUserTable, setShowUserTable] = useState(false);
  const [showJobsTable, setShowJobsTable] = useState(false);

  const toggleUserTable = () => {
    setShowUserTable(true);
    setShowJobsTable(false);
  };

  const toggleJobsTable = () => {
    setShowUserTable(false);
    setShowJobsTable(true);
  };

  const hiddenTables = () => {
    setShowUserTable(false);
    setShowJobsTable(false);
  };

  const data = get();

  // Access the values from the returned object
  const { numberOfUsers, numberOfJobs } = data;

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-blanc_creme border-b border-gris">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <span className="self-center text-xl font-semibold sm:text-2xl ml-2 sm:ml-8 whitespace-nowrap text-black">
                Admin Trabaho
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className="mr-6">
                  <svg
                    className="w-6 h-6 text-[#425154]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 20"
                  >
                    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                  </svg>
                </div>
                <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-300 rounded-full ring-2 ring-gris">
                  <span class="font-medium text-gray-600">A</span>
                  {/* <img
                     className="w-10 h-10 rounded-full"
                     src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                     alt="user photo"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-2 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gris border-r border-gris sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gris">
          <ul className="space-y-4 font-medium">
            <li>
              <button
                type="button"
                className="flex w-full items-center p-2 text-left text-white rounded-lg  hover:bg-[#28c27a] group"
                onClick={hiddenTables}
              >
                <svg
                  className="w-5 h-5 text-blanc_creme transition duration-75  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center p-2 text-left text-white rounded-lg hover:bg-[#28c27a] group"
                onClick={toggleUserTable}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-blanc_creme transition duration-75  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center p-2 text-left text-white rounded-lg  hover:bg-[#28c27a] group"
                onClick={toggleJobsTable}
              >
                <svg
                  className="w-5 h-5 text-blanc_creme transition duration-75  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                  <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Jobs</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 pt-8 mt-14">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-1">
              <CardStats cardName={"Total Users"} totalNbr={numberOfUsers} />
            </div>
            <div className="col-span-1">
              <CardStats cardName={"Total Jobs"} totalNbr={numberOfJobs} />
            </div>
          </div>
        </div>
        <div id="userTable" className={`${showUserTable ? "" : "hidden"}`}>
          <AdminUserTable />
        </div>
        <div id="jobsTable" className={`${showJobsTable ? "" : "hidden"}`}>
          <AdminJobsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
