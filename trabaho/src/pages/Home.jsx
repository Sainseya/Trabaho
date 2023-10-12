import Header from '../components/Header/';
import Search from '../components/Search';
import JobCard from '../components/Card/JobCard';
import UserCard from '../components/Card/UserCard';

const Home = () => {
   return (
      <div className="flex flex-col gap-5 h-screen">
         <Header />
         <Search />
         <div className="flex flex-rows w-full px-24 gap-5 mt-60">
            <UserCard />
            <JobCard />
         </div>

      </div>
   );
};
export default Home;
