import React from 'react';
import { useForm } from 'react-hook-form';
import { LiaSearchSolid } from 'react-icons/lia';
import { MdOutlinePlace } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { GrCloudComputer } from 'react-icons/gr';
import { PiMoneyThin } from 'react-icons/pi';
import InputField from './inputFIeld';
import Button from '../Button';

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
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 fixed sm:top-[4.9rem] top-10">
         <div className="block h-4 w-full bg-[#e5ece9] "></div>
         <div className="flex w-full bg-emeraude h-32 justify-center items-center rounded-md">
            <form
               className="flex flex-col flex-1 flex-wrap lg:px-12 md:px-8 sm:px-6 px-4 sm:flex-row items-center gap-4 justify-center"
               onSubmit={handleSubmit(onSubmit)}
            >
               <InputField
                  icon={<LiaSearchSolid size={20} />}
                  placeholder="Search a job"
                  registerKey="jobTitle"
                  register={register}
                  errors={errors}
               />
               {/* <InputField
                  icon={<MdOutlinePlace size={20} />}
                  placeholder="Location"
                  registerKey="location"
                  register={register}
                  errors={errors}
               />

               <div className="flex flex-row gap-2 items-center px-2 md:w-28 md:h-8 xl:w-48 xl:h-11 sm:w-28 sm:h-9 bg-white w-48 h-11 rounded-md">
                  <div className="flex items-center w-6 h-8">
                     <AiOutlineHome size={20} />
                  </div>

                  <select
                     id="where"
                     name="where"
                     className="w-full border-none bg-white outline-none"
                     placeholder="where"
                     {...register('technology')}
                  >
                     <option value="remote">Remote</option>
                     <option value="presence">Presence</option>
                  </select>
               </div>

               <div className="flex flex-row gap-2 items-center px-2 md:w-28 md:h-8 xl:w-48 xl:h-11 sm:w-28 sm:h-9 bg-white w-48 h-11 rounded-md">
                  <div className="flex items-center w-6 h-8">
                     <GrCloudComputer size={20} />
                  </div>

                  <select
                     id="techno"
                     name="techno"
                     className="w-full border-none bg-white outline-none"
                     placeholder="Technology"
                     {...register('technology')}
                  >
                     <option value="python">Python</option>
                     <option value="java">Java</option>
                     <option value="c#">C#</option>
                     <option value="ruby">Ruby</option>
                  </select>
               </div>

               <div className="flex flex-row gap-2 items-center px-2 md:w-28 md:h-8 xl:w-48 xl:h-11 sm:w-28 sm:h-9 bg-white w-48 h-11 rounded-md">
                  <div className="flex items-center w-6 h-8">
                     <PiMoneyThin size={20} />
                  </div>

                  <select
                     id="salary"
                     name="salary"
                     className="w-full border-none bg-white outline-none"
                     placeholder="Salary"
                     {...register('salary')}
                  >
                     <option value="40 - 50">40k - 50k</option>
                     <option value="50 - 60">50k - 60k</option>
                     <option value="60 - 70">60k - 70k</option>
                     <option value="70 - 80">70k - 80k</option>
                  </select>
               </div> */}

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
