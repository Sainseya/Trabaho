import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Button from "../Button";
import UserService from "../../services/user.service";

const AddJobPopup = ({ onClose }) => {
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [expectetion, setExpectetion] = useState("");
  const [tag, setTag] = useState("");
  const [place, setPlace] = useState("");
  const [periode, setPeriode] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [localization, setLocalization] = useState("");

  const jobData = {
    role,
    description,
    expectetion,
    tag,
    place,
    periode,
    company,
    salary,
    localization,
  }


  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };
  
  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onChangeExpectetion = (e) => {
    const expectetion = e.target.value;
    setExpectetion(expectetion);
  };

  const onChangeTag = (e) => {
    const tag = e.target.value;
    setTag(tag);
  };

  const onChangePlace = (e) => {
    const place = e.target.value;
    setPlace(place);
  };

  const onChangePeriode = (e) => {
    const periode = e.target.value;
    setPeriode(periode);
  };

  const onChangeCompany = (e) => {
    const company = e.target.value;
    setCompany(company);
  };

  const onChangeSalary = (e) => {
    const salary = e.target.value;
    setSalary(salary);
  };

  const onChangeLocalization = (e) => {
    const localization = e.target.value;
    setLocalization(localization);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // UserService.updateUser(userData)
    //   .then((response) => {
    //     toast.success("Update succes");
    //     setCurrentUser(response.data);
        onClose();
    //   })
    //   .catch((error) => {
    //     toast.error(`Error`);
    //     const _content =
    //       (error.response && error.response.data) ||
    //       error.message ||
    //       error.toString();

    //     setCurrentUser(_content);
    //   });
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-40 bg-blanc_creme bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <Toaster />
      <div className="relative bg-slate-50 w-2/4 p-6 rounded-lg shadow-md">
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-red-600 border-2 rounded-full flex justify-center items-center"
          onClick={onClose}
        >
          <p className="text-white font-bold text-center">X</p>
        </button>
        <p className="flex justify-center items-center p-4 font-semibold text-lg">
          Add Job to Database
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="Name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                value={role}
                onChange={onChangeRole}
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                value={company}
                onChange={onChangeCompany}
                placeholder=" "
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="tag"
                id="floating_tag"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                value={tag}
                onChange={onChangeTag}
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_tag"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Tag
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="place"
                id="floating_place"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                value={place}
                onChange={onChangePlace}
                placeholder=" "
              />
              <label
                htmlFor="floating_place"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Place
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="periode"
                id="floating_periode"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                value={periode}
                onChange={onChangePeriode}
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_periode"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Periode
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="salary"
                id="floating_salary"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
                value={salary}
                onChange={onChangeSalary}
                placeholder=" "
              />
              <label
                htmlFor="floating_salary"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Salary
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="description"
              id="floating_description"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
              value={description}
              onChange={onChangeDescription}
              placeholder=" "
            />
            <label
              htmlFor="floating_description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="expectetion"
              id="floating_expectetion"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
              value={expectetion}
              onChange={onChangeExpectetion}
              placeholder=" "
            />
            <label
              htmlFor="floating_expectetion"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Expectetion
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="localization"
              id="floating_localization"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#d9dedc] appearance-none focus:outline-none focus:ring-0 focus:border-[#216869] peer"
              value={localization}
              onChange={onChangeLocalization}
              placeholder=" "
            />
            <label
              htmlFor="floating_localization"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[#216869] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Localization
            </label>
          </div>
          <div className="flex justify-center items-center">
            <Button name="Save" width="7rem" height="3rem" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobPopup;
