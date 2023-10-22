import React, { useState, useEffect } from "react";
import UserService from "../../../services/user.service";

const SkillsCard = () => {
   const [currentUser, setCurrentUser] = useState({});
   const [skills, setSkills] = useState([]);

   useEffect(() => {
      UserService.getUserById()
         .then((response) => {
            setCurrentUser(response.data);
            setSkills(response.data.skills); // Mise à jour des compétences ici
         })
         .catch((error) => {
            const _content =
               (error.response && error.response.data) ||
               error.message ||
               error.toString();
            setCurrentUser({ error: _content }); // Gérer les erreurs ici
         });
   }, []);

   return (
      <div className="flex flex-col gap-2 bg-white w-full h-auto rounded-lg items-start p-4">
         <h2 className="font-bold">Skills & expertise</h2>
         <div className="grid grid-cols-3 w-full items-center gap-1 justify-center">
            {skills.map((skill, index) => (
               <span
                  className="inline-block bg-slate-200 px-1.5 rounded-md text-sm text-center"
                  key={index} // Utilisez l'index comme clé pour chaque compétence
               >
                  {skill}
               </span>
            ))}
         </div>
      </div>
   );
};

export default SkillsCard;
