import Body from '../components/Body';
import Header from '../components/Header/';
import Search from '../components/Search';

const Home = () => {
   return (
      <div className="flex flex-col gap-5 h-screen">
         <Header />
         <Search />
         <Body />
      </div>
   );
};

export default Home;
