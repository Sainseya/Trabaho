import React from 'react';
import { useForm } from 'react-hook-form';
import { LiaSearchSolid } from 'react-icons/lia';
import { MdOutlinePlace } from 'react-icons/md';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { GrCloudComputer } from 'react-icons/gr';
import { TbReportMoney } from 'react-icons/tb';
import Button from '../Button';
import InputBox from './inputBox';
const Search = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      alert(JSON.stringify(data));
   };

   return (
      <div className="w-full px-24 fixed top-[4.9rem]">
         <div className="w-full px-40 bg-[#e5ece9] h-2"></div>
         <div className="w-full px-40 flex bg-emeraude h-32 justify-center items-center rounded-md">
            <form
               className="flex flex-row items-center gap-2 justify-center"
               onSubmit={handleSubmit(onSubmit)}
            >
               <div className="flex flex-row gap-2 items-center px-2  bg-white w-48 h-11 rounded-md">
                  <div className="flex items-center w-6 h-8">
                     <LiaSearchSolid size={20} />
                  </div>
                  <input
                     className="w-full border-none outline-none"
                     placeholder="Job Title"
                     {...register('jobTitle')}
                  />

                  {errors.jobTitle && <span>This field is required</span>}
               </div>

               <div className="flex flex-row gap-2 items-center px-2  bg-white w-48 h-11 rounded-md">
                  <div className="flex items-center w-6 h-8">
                     <MdOutlinePlace size={20} />
                  </div>
                  <input
                     className="w-full border-none outline-none"
                     placeholder="Location"
                     {...register('location')}
                  />
               </div>

               <div className="flex flex-row gap-2 items-center px-2  bg-white w-48 h-11 rounded-md">
                  <div className="flex items-center w-6 h-8">
                     <FaPlaceOfWorship size={20} />
                  </div>
                  <input
                     className="w-full border-none outline-none"
                     placeholder="Category"
                     {...register('category')}
                  />
               </div>

               <div className="flex flex-row gap-2 items-center px-2  bg-white w-48 h-11 rounded-md">
                  <div className="flex items-center w-6 h-8">
                     <GrCloudComputer size={20} />
                  </div>
                  <input
                     className="w-full border-none outline-none"
                     placeholder="Technology"
                     {...register('technology')}
                  />
               </div>

               <div className="flex flex-row gap-2 items-center px-2  bg-white w-48 h-11 rounded-md">
                  <div className="flex items-center w-6 h-8">
                     <TbReportMoney size={20} />
                  </div>
                  <select
                     id="cars"
                     name="cars"
                     className="w-full border-none bg-white outline-none"
                     placeholder="Salary"
                     {...register('salary')}
                  >
                     <option value="40 - 50">40k - 50k</option>
                     <option value="50 - 60">50k - 60k</option>
                     <option value="60 - 70">60k - 70k</option>
                     <option value="70 - 80">70k - 80k</option>
                  </select>
               </div>

               <Button
                  height="2.75rem"
                  width="12rem"
                  name="Search"
                  onClick={onSubmit}
                  type="submit"
               />
            </form>
         </div>
      </div>
   );
};

export default Search;
