import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(">>> check props :", listUsers);
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              my name is {user.name} and I'm {user.age} years old
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
