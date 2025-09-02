import React from "react";

class MyComponents extends React.Component {
  info = {
    name: "Kim Soo Nam",
    age: 20,
    address: "Ha Noi",
  };
  handleClick = (event) => {
    console.log("hello");
    console.log(event);
  };
  render() {
    return (
      <div>
        user name : {this.info.name} <br />
        age : {this.info.age} <br />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponents;
