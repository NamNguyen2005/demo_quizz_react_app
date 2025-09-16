import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
import { useState } from "react";

const MyComponents = (props) => {
  const [listUsers, setListUser] = useState([
    { id: 1, name: "Nguyen Van A", age: 16 },
    { id: 2, name: "Nguyen Van B", age: 21 },
    { id: 3, name: "Nguyen Van C", age: 22 },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUser([...listUsers, userObj]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = [...listUsers];

    listUserClone = listUserClone.filter((item) => {
      return item.id !== userId;
    });
    setListUser(listUserClone);
  };

  return (
    <div>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default MyComponents;
