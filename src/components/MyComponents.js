import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponents extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Nguyen Van A", age: 16 },
      { id: 2, name: "Nguyen Van B", age: 21 },
      { id: 3, name: "Nguyen Van C", age: 22 },
    ],
  };
  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
    console.log(">>> check user obj :", userObj);
  };
  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponents;
