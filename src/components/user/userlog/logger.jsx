import {React} from 'react'
import { useNavigate  } from "react-router-dom";

function Logger() {
    const navigate = useNavigate();
  function HandleClick() {
    navigate ("/user/prevlogs");
  }
  return (
    <>
    <h2>hello (user), How was your day?</h2>
    <h1 className='day'>Dec 30 2022</h1>
    <form action="/action_page.php">
        <label for="fname">Wake up at: </label><br/>
        <input type="time"  size = "10" id="fname" name="fname"/><br/><br/>
        <label for="lname">hours slept:</label> <br/>
        <input type="text" size = "10"/><br/><br/>
        <h3>Review your performance:</h3>
        <label for="lname">How did you spend your day (9-5)?</label> <br/>
        <input type="text" size = "150"/><br/><br/>
        <label for="lname">How did you spend your night (5-12)?</label> <br/>
        <input type="text" size = "150"/><br/><br/><br/><br/>
        <label for="lname">Your thoughts on the day?</label> <br/>
        <input type="text" size = "150"/><br/><br/>
        <h3>Rate your performance:</h3>
        <label for="lname">Software:</label> <br/>
        <input type="number" min= "0" max= "10" /> <br/>
        <label for="lname">Health:</label> <br/>
        <input type="number" min= "0" max= "10" /> <br/>
        <label for="lname">Overall:</label> <br/>
        <input type="number" min= "0" max= "10" />
        <br/><br/><input type="submit" value="Submit"/>
    </form>
    <br/>
    <button onClick={HandleClick} className='btn btn-primary'>Click here to open all your previous logs</button>
    </>
    )
}

export default Logger