import React, { useState } from "react";
import { user } from "../../../Data/datas";
import Button from "../../Button";
import EditProfil from "./EditProfil";

const User = () => {
  const [editProfil, setEditProfil] = useState(false);

  const handleButtonClick = () => {
    setEditProfil(true);
  };

  const handleEditProfilClose = () => {
    setEditProfil(false);
  };

  return (
    <div>
      {user.map((user) => (
        <div
          key={user.id}
          className="flex flex-col gap-2 justify-center bg-white w-full h-64 rounded-lg items-center "
        >
          <img
            src={user.photo}
            alt=""
            className="object-cover w-24 h-24 rounded-full"
          />
          <h2 className="font-bold">
            {user.surname} {user.name}
          </h2>
          <p className="text-sm w- text-zinc-600">{user.searching}</p>
          <Button
            name={"Edit profill"}
            onClick={handleButtonClick}
            width={"40%"}
            height={"20%"}
          />
        </div>
      ))}
      {editProfil && <EditProfil onClose={handleEditProfilClose} />}
    </div>
  );
};

export default User;
