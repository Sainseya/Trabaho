const UserSVG = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8 text-[#425154]"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
  </svg>
);

const JobSVG = () => (
  <svg
    className="w-6 h-6 sm:w-8 sm:h-8 text-[#425154]"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
  </svg>
);

const CardStats = ({ totalNbr = 0, cardName = "Total Users" }) => {
  return (
    <div className="mx-auto max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex justify-between items-center">
        <p className="mb-2 text-lg sm:text-2xl font-semibold tracking-tight text-gray-900">
          {cardName}
        </p>
        <span>
          {cardName === "Total Users" ? <UserSVG /> : <JobSVG />}
        </span>
      </div>
      <p className="mb-4 text-2xl sm:text-4xl font-bold text-dark">
        {totalNbr}
      </p>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default CardStats;
