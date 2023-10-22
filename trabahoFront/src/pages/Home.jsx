import Header from '../components/Header/';
import Search from '../components/Search';
import JobCard from '../components/Card/JobCard';
import UserCard from '../components/Card/UserCard';
const Home = () => {

   return (
         <div className="flex flex-col gap-5 h-screen">
            <Header />
            <Search />
            <div className="flex flex-rows lg:px-20 md:px-16 sm:px-8 px-4 sm:mt-60 mt-52 sm:pb-12">
               <UserCard  />
               <JobCard />
            </div>
         </div>

      )
   ;
};
export default Home;
