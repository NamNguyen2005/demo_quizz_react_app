import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Kim Soo Nam",
    age: 20,
    address: "Ha Noi",
  };
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeInputAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(">>> real data submit is :", this.state);
  };

  render() {
    return (
      <div>
        user name : {this.state.name} <br />
        age : {this.state.age} <br />
        <br />
        <label>name :</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>submit</button>
        </form>
        <br />
        <label>age :</label>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeInputAge(event)}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
