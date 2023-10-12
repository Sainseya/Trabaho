import { user } from '../../../Data/datas';
import SkillsCard from './skillsCard';

const Experiences = () => {
   return (
      <div className="bg-white w-full rounded-lg p-4">
         <h2 className="font-bold">Previous Experience</h2>
         {user.map((user, userIndex) =>
            user.experiences.map((exp, expIndex) => (
               <div key={userIndex + '-'} className="flex items-center gap-3">
                  <img
                     className="object-fill w-10 h-10 "
                     src={exp.logo}
                     alt={`logo ${exp.name}`}
                  />
                  {/* <div className="bg-black w-10 h-10">{exp.logo}</div> */}
                  <div>
                     <h2 className="font-semibold">{exp.name}</h2>
                     <p className="text-sm text-gray-600">
                        {exp.role} - {exp.begin} / {exp.end}
                     </p>
                  </div>
               </div>
            ))
         )}
      </div>
   );
};

export default Experiences;
