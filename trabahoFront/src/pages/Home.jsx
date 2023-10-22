import Header from '../components/Header/';
import Search from '../components/Search';
import JobCard from '../components/Card/JobCard';
import UserCard from '../components/Card/UserCard';
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const currentUser = AuthService.getCurrentUser();
   let navigate = useNavigate();

   const navigateToAuthPage = () =>{
      navigate('/');
   }

   return (

      <div>
  {currentUser ? (
    <div className="flex flex-col gap-5 h-screen">
      <Header />
      <Search />
      <div className="flex flex-rows lg:px-20 md:px-16 sm:px-8 px-4 sm:mt-60 mt-52 sm:pb-12">
        <UserCard />
        <JobCard />
      </div>
    </div>
  ) : (
   <div className="flex flex-col h-screen items-center justify-center">
   <p>Log in to view content.</p>
   <button onClick={navigateToAuthPage}>To log in</button>
 </div>
  )}
</div>

   )
   };

export default Home;
