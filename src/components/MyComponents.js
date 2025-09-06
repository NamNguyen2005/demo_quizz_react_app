import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponents extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Nguyen Van A", age: 16 },
      { id: 2, name: "Nguyen Van B", age: 21 },
      { id: 3, name: "Nguyen Van C", age: 22 },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponents;
