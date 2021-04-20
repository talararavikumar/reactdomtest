import "./styles.css";
import React from "react";

export default function App() {
  return <Message />;
}

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bRender: false,
      sMessage: "hi"
    };
  }

  modify = () => {
    this.setState((prevState) => ({
      ...prevState,
      bRender: !prevState.bRender
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.sMessage}</div>
        <div onClick={this.modify}>Modify</div>
        {this.state.bRender && <div>working</div>}
      </React.Fragment>
    );
  }
}
