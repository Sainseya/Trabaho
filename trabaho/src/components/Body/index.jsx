import JobCard from '../Card/JobCard';
import UserCard from '../Card/UserCard';

const Body = () => {
   return (
      <div className="flex flex-rows w-full px-24 gap-5 mt-60">
         <UserCard />
         <JobCard />
      </div>
   );
};

export default Body;
