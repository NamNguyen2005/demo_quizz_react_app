import React from "react";
import { useState } from "react";

const AddUserInfo = (props) => {
  const [info, setInfo] = useState({
    name: "Kim Soo Nam",
    age: 20,
    address: "Ha Noi",
  });

  const handleOnChangeInput = (event) => {
    setInfo({
      name: event.target.value,
    });
  };
  const handleOnChangeInputAge = (event) => {
    setInfo({
      age: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      name: info.name,
      age: info.age,
      id: Math.floor(Math.random() * 100 + 1),
    });
  };

  return (
    <>
      user name : {info.name} <br />
      age : {info.age} <br />
      <br />
      <label>name :</label>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <input
          value={info.name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button>submit</button>
      </form>
      <br />
      <label>age :</label>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <input
          value={info.age}
          type="text"
          onChange={(event) => handleOnChangeInputAge(event)}
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default AddUserInfo;
