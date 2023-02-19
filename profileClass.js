import React, { useEffect, useState } from "react";

class ProfileClass extends React.Component {
  render() {
    console.log("render Profile");
    return (
      <div>
        <h1>Profile.... </h1>
        <Profile3 />
        <Profile2 />
      </div>
    );
  }
}

class Profile2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      img: null,
    };
    console.log("Profile2 constructor");
  }
  componentDidMount() {
    console.log("Profile2 Component did mount");
  }
  componentDidUpdate() {
    console.log("Profile2 updated");
  }
  render() {
    console.log("Profile2 did render");
    return (
      <div>
        <button
          onClick={() => {
            let x = this.state.count + 1;
            this.setState({ count: x });
          }}
        >
          click Me! = {this.state.count}
        </button>
        <h2>this is:{this.props.name}</h2>
      </div>
    );
  }
}

class Profile3 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 50,
    };
    console.log("profile3Class constructor");
  }
  componentDidMount() {
    this.setState({
      count: this.state.count * 100,
    });
    console.log("profile3Class ComponentDidMount");
  }
  render() {
    console.log("profile3Class rendering");
    return (
      <button
        onClick={() => {
          this.setState({
            count: count + 1,
          });
        }}
      >
        {this.count}
      </button>
    );
  }
}
export default ProfileClass;
