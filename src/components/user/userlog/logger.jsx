import {React , Component } from 'react';
import { useNavigate  } from "react-router-dom";

function HandleClick() {
  const navigate = useNavigate();
  navigate ("/user/prevlogs");
}

export default class Logger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      wake: "",
      slept: "",
      day1: "",
      day2: "",
      reflection:"",
      software: "",
      health: "",
      overall: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const { 
      wake,
      slept,
      day1,
      day2,
      reflection,
      software,
      health,
      overall, } = this.state;
    // console.log(email, password);
    
    fetch("http://localhost:5000/user/logs", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        wake,
        slept,
        day1,
        day2,
        reflection,
        software,
        health,
        overall,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "user has logged");
        if (data.status == "ok") {
          alert("successfully logged");
          var form = document.getElementById('form');
          form.reset();
        }
        else if(data.status == "error") {
          alert("log was not saved. Please change inputs and try again");
        } 
      });
  }

render(){
  return (
    <>
    <h3>Today is {this.state.date.toLocaleDateString()}</h3>
    <h2>hello (user), What date are you logging for?</h2> 
    <h1 className='day'></h1>
    <form id='form' onSubmit={this.handleSubmit}>

        <label for="fname">Wake up time for the logged day </label><br/>
        <input type="datetime-local" size = "10" id="fname" name="fname" onChange={(e) => this.setState({ wake: e.target.value  })}/><br/><br/>

        <label for="lname">hours slept:</label> <br/>
        <input type="number" size = "10" min= "0" max= "24" onChange={(e) => this.setState({ slept: e.target.value })}/><br/><br/>
        
        <h3>Review your performance:</h3>
        <label for="lname">How did you spend your day (9-5)?</label> <br/>
        <input type="text" size = "150" onChange={(e) => this.setState({ day1: e.target.value })}/><br/><br/>

        <label for="lname">How did you spend your night (5-12)?</label> <br/>
        <input type="text" size = "150" onChange={(e) => this.setState({ day2: e.target.value })}/><br/><br/><br/><br/>

        <label for="lname">Reflection:</label> <br/>
        <input required type="text" size = "150" onChange={(e) => this.setState({ reflection: e.target.value })}/><br/><br/>

        <h3>Rate your performance:</h3>
        <label for="lname">Software:</label> <br/>
        <input type="number" min= "0" max= "10" onChange={(e) => this.setState({ software: e.target.value })}/> <br/>

        <label for="lname">Health:</label> <br/>
        <input type="number" min= "0" max= "10" onChange={(e) => this.setState({ health: e.target.value })}/> <br/>

        <label for="lname">Overall:</label> <br/>
        <input type="number" min= "0" max= "10" onChange={(e) => this.setState({ overall: e.target.value })}/>

        <br/><br/><input type="submit" value="Submit"/>
    </form>
    <br/>
    <button onClick={HandleClick} className='btn btn-primary'>Click here to open all your previous logs</button>
    </>
    )
}
}

