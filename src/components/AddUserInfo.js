import React from "react";

class AddUserInfo extends React.Component {
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
    this.props.handleAddNewUser(
      {name :this.state.name,
        age : this.state.age,
        id : Math.floor((Math.random() * 100) + 1)
      }
    );
  };

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default AddUserInfo;
