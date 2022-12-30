// Displays all the logs that have been saved.
import {React, Component} from 'react'




export default class PrevLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/user/prevlogs", {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }

  render() {
    return ( 
    <>
    
    <div>{this.state.userData.day2}</div>
    <div>{this.state.userData.reflection}</div>
    <div>{this.state.userData._id}</div>
    <div>{this.state.userData.wake}</div>
    <div>{this.state.userData.slept}</div>
    
    </>
    )
  }
}
