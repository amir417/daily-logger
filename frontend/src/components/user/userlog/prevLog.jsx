// Displays all the logs that have been saved.
import {React, Component} from 'react'
import "./prevLog.css"

function convertUTCDateToLocalDate(date) {
  var dateLocal = new Date(date);
  var newDate = new Date(dateLocal.getTime() - dateLocal.getTimezoneOffset()*60*1000);
  return newDate;
}



export default class PrevLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
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
        console.log(data, "user logs");
        this.setState({ userData: data.data });
      });
  }

  render() {
    return ( 
    <>
    <a  href={"/user/logs"} target="blank" className='btn btn-primary'>Click here to create a new log</a>

    <br/><br/><br/>
    {this.state.userData.reverse().map((user) => (
      // const wake = user.wake;
      <>
      <h2 className='title'>Log for {user.wake}</h2>
    {/* <div> Log for the following date (wakeup time is also attached):  {convertUTCDateToLocalDate(wake)}</div> */}
    <div> Log for the following date (wakeup time is also attached):  {user.wake}</div>
    <div>Slept {user.slept} HRS</div>
    <br/>
    <div>What did I do from 9-5? {user.day1}</div>
    <div>What did I do from 5-12? {user.day2}</div>
    <div>My overall reflection for the day: {user.reflection}</div>
    <br/>
    <div>Software improvment rating (/10): {user.software}</div>
    <div>Health improvment rating (/10): {user.health}</div>
    <div>Overall rating for the day (/10): {user.overall}</div>
    <hr/><br/><br/>
    </>
    ))}
    


    </>
    )
  }
}
