import Experiences from './experiences';
import SkillsCard from './skillsCard';
import User from './user';

const userCard = () => {
   return (
      <div>
         <div className="flex flex-col w-80 h-96 gap-5 fixed">
            <User />
            <SkillsCard />
            <Experiences />
         </div>
      </div>
   );
};

export default userCard;
