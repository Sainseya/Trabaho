import { BsSave } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { TbReportMoney } from 'react-icons/tb';
import Button from '../../Button';
import { jobDetails } from '../../../Data/datas';

const Card = () => {
   const tab = [];
   const jobDetail = [];
   const company = jobDetails.forEach((x) => {
      tab.push(x.about);
      tab.push(x.id);
      tab.push(x.logo);
      tab.push(x.name);
   });

   // const addJobsDetails = jobDetails.forEach((x) => {
   //    tab.push(x.jobs.map((y) => {

   //    } );
   // });
   console.log(tab);

   // const companiesWithMultipleJobs = jobDetails.filter(
   //    (company) => company.jobs.length > 1
   // );
   // console.log(companiesWithMultipleJobs);

   const handleButtonClick = () => {};

   return '';
   // <div className="flex p-2 flex-col w-80 h-46 bg-white rounded-md shadow-lg">
   //    <div className="flex flex-row items-start justify-between border-b-2 h-[50%] pb-4">
   //       <div className="flex flex-row gap-4">
   //          <img
   //             className="object-fill w-24 h-16 "
   //             src={logo}
   //             alt={`logo ${name}`}
   //          />
   //          {/*
   //          <img
   //             src={user.photo}
   //             alt=""
   //             className="object-cover w-24 h-24 rounded-full"
   //          /> */}
   //          <div>
   //             <h2 className="font-semibold">{job.jobs.map()}</h2>
   //             <div className="flex flex-row gap-2">
   //                <p className="text-sm font-bold text-emeraude">
   //                   Full-time
   //                </p>
   //                <p className="text-sm font-bold text-amber-700">Remote</p>
   //             </div>
   //          </div>
   //       </div>
   //       <div className="hover:bg-gray-300">
   //          {/* <BsSave size={18} /> */}
   //       </div>
   //    </div>

   //    <div className="flex flex-row justify-between pt-1">
   //       <div className="flex flex-col gap-5">
   //          <div className="flex flex-row justify-center items-center gap-1">
   //             <HiLocationMarker />
   //             <p>San Fancisco</p>
   //          </div>
   //          <div className="flex flex-row items-center text-gray-500 gap-1">
   //             <HiLocationMarker />
   //             <p>10 mins ago</p>
   //          </div>
   //       </div>
   //       <div className="flex flex-col gap-5">
   //          <div className="flex flex-row justify-center items-center">
   //             <TbReportMoney />
   //             <p className=""> Salary : $80/hr</p>
   //          </div>
   //          <Button
   //             name="Details"
   //             width={'fulls'}
   //             height={'3rem'}
   //             onClick={handleButtonClick}
   //          />
   //       </div>
   //    </div>
   // </div>
};

export default Card;
