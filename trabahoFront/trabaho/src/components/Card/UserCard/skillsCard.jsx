import { user } from '../../../Data/datas';

const SkillsCard = () => {
   return (
      <div className="flex flex-col gap-2 bg-white w-full h-auto rounded-lg items-start px-7 pt-4 pb-6">
         <h2 className="font-bold">Skills & expertise</h2>
         {user.map((skillsList, index) => (
            <div
               className="grid grid-cols-3 items-center gap-1 justify-center"
               key={index}
            >
               {skillsList.skills.map((skillsName, index) => (
                  <div
                     className="bg-slate-200 w-20 rounded-md text-center "
                     key={index}
                  >
                     {skillsName.name}
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
};

export default SkillsCard;
