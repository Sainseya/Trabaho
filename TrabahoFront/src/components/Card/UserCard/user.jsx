import { useState, useEffect } from "react";
import { user } from "../../../Data/datas";
import Button from "../../Button";
import EditProfil from "./EditProfil";
import UserService from "../../../services/user.service";

const User = () => {
  const [editProfil, setEditProfil] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    UserService.getUserById()
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setCurrentUser(_content);
      });
  }, []); 

  const handleButtonClick = () => {
    setEditProfil(true);
  };

  const handleEditProfilClose = () => {
    setEditProfil(false);
  };

  return (
    <div>
        <div
          key={currentUser.id}
          className="flex flex-col gap-2 justify-center bg-white w-full h-64 rounded-lg items-center "
        >
          <img
            src={user.photo}
            alt=""
            className="object-cover w-24 h-24 rounded-full"
          />
          <h2 className="font-bold">
            {currentUser.username} {currentUser.lastname}
          </h2>
          <p className="text-sm w- text-zinc-600">{}</p>
          <Button
            name={"Edit profill"}
            onClick={handleButtonClick}
            width={"40%"}
            height={"20%"}
          />
        </div>
      {editProfil && <EditProfil onClose={handleEditProfilClose} setCurrentUser={setCurrentUser}/>}
    </div>
  );
};

export default User;
