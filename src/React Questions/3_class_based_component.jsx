import { Component } from "react";
// class Student extends Component {
//   render() {
//     return (
//       <>
//         <h1>Hello There!!!!!</h1>
//       </>
//     );
//   }
// }
// export default Student;

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount = () => {
    console.log("Mounted!");
  };

  componentDidUpdate = () => {
    console.log("Updated!!");
  };

  componentWillUnmount = () => {
    console.log("Unmounted!!!");
  };

  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.updateCount}>Increase</button>
        {`Current count is -${this.state.count}`}
        <AnotherComponent data={this.state.count}/>
      </>
    );
  }
}

class AnotherComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return<>
      <h5>{this.props.data}</h5>
    </>
  }
}

export default ClassCounter;
