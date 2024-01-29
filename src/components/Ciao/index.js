import { Component } from "react";

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = { isHi: true };
  }
  switchState = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };

  render() {
    const { name } = this.props;
    const { isHi } = this.state;
    // const wiordHi = isHi ? "hi" : 'bye';

    return (
      <>
        <h2>
          {" "}{isHi ? "hi" : "bye"}! {name} !
        </h2>
        <button onClick={this.switchState}>Swith</button>
      </>
    );
  }
}

export default Ciao;
