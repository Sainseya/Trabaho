import Experiences from "./experiences";
import SkillsCard from "./skillsCard";
import User from "./user";

const userCard = () => {

  return (
    <div className=" flex-col lg:w-64 xl:w-80 gap-5 pr-4 fixed hidden lg:flex">
      <User />
      <SkillsCard />
      <Experiences />
    </div>
  );
};

export default userCard;
