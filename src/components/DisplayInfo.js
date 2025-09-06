import React from "react";

class DisplayInfo extends React.Component {
  state = {
    showListUser: true,
  };
  displayListUser = () => {
    this.setState({
      showListUser: !this.state.showListUser,
    });
  };
  render() {
    const { listUsers } = this.props;
    console.log(">>> check props :", listUsers);
    return (
      <div>
        <button
          onClick={() => {
            this.displayListUser();
          }}
        >
          {this.state.showListUser === true
            ? "Hide list user"
            : "Show list user"}
        </button>
        {this.state.showListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age >= 18 ? "green" : "red"}>
                  my name is {user.name} and I'm {user.age} years old
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
