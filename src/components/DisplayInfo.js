import React, { useEffect } from "react";
import "./DisplayInfo.scss";
import { useState } from "react";

const DisplayInfo = (props) => {
  const [showHideListUser, setShowHideListUser] = useState(true);
  let { listUsers } = props;

  console.log(">>> call render: ", props);
  const handleShowHideListUser = () => {
    setShowHideListUser(!showHideListUser);
  };

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You deleted all the users");
    }
    console.log(">>> call useEffect: ", listUsers);
  }, [listUsers]);

  return (
    <div className="display-info-container">
      <button onClick={() => handleShowHideListUser()}>
        {showHideListUser === true ? "Hide list user" : "Show list user"}
      </button>
      {showHideListUser && (
        <div>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={user.age >= 18 ? "green" : "red"}>
                my name is {user.name} and I'm {user.age} years old
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfo;




