import React from "react";
import "./DisplayInfo.scss";
import logo from ".././logo.svg";
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
    return (
      <div className="display-info-container">
        <img src={logo} />
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
