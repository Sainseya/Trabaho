import { user } from '../../../Data/datas';

const SkillsCard = () => {
   return (
      <div className="flex flex-col gap-2 bg-white w-full h-auto rounded-lg items-start p-4">
         <h2 className="font-bold">Skills & expertise</h2>
         {user.map((skillsList, index) => (
            <div
               className="grid grid-cols-3 w-full items-center gap-1 justify-center"
               key={index}
            >
               {skillsList.skills.map((skillsName, index) => (
                  <span
                     className="inline-block bg-slate-200 px-1.5 rounded-md text-sm text-center "
                     key={index}
                  >
                     {skillsName.name}
                  </span>
               ))}
            </div>
         ))}
      </div>
   );
};

export default SkillsCard;
