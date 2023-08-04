import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>Payment</h1> 
  
    <div class="container">
     
      <div class="left">
        
        <form>
          Full Name 
          <input type="text" name="" placeholder="Enter Name"></input>
          Email
          <input type="text" name="" placeholder="Enter Email"></input>
          City
          <input type="text" name="" placeholder="Enter City"></input>
          <div id="zip">
            <label>
              State<select>
                <option>
                 Choose State
                </option>
                <option>
                 
                 Kolkata
                </option>
                <option>
                 Delhi
                </option>
                <option>
                 Tamil Nadu
                </option>
                <option>
                 Karnataka
                </option>
                <option>
                 Madhya Pradesh
                </option>
                <option>
                 Andhra Pradesh
                </option>
                <option>
                Uttar Pradesh
                </option>
                
                <option>
                 Jammu and Kashmir
                </option>
                <option>
                 Jammu and Kashmir
                </option>
                <option>
                 Jammu and Kashmir
                </option>
                <option>
                 Jammu and Kashmir
                </option>
                <option>
                 Jammu and Kashmir
                </option>
                

                </select>
            </label>
            <label>
              Zip Code
              <input type="number" name="" placeholder="Zip Code"></input>
            </label>
          </div>
        </form>
      </div>
      <div class="right">
      <form>
          Accepted Card<br></br>
         <img src="card1.png" height="50" width="100"></img>
         <img src="card2.png" height="50" width="100"></img>
        
         <br></br>
          Card Number
          <input type="text" name="" placeholder="Enter card Number"></input>
          Expiry Month
          <input type="text" name="" placeholder="Enter Month"></input>
          <div id="zip">
            <label>
              Enter Year<select>
                <option>
                 Choose Year
                </option>

                <option>
                 2024
                </option>
                <option>
                 2025
                </option>
                <option>
                 2026
                </option>
                <option>
                 2027
                </option>
                

                </select>
            </label>
            <label>
              CVV
              <input type="number" name="" placeholder="CVV"></input>
            </label>
          </div>
        </form>
        <input type="submit" name="" value="Proceed To Pay"></input>
      </div>
    </div>
    </>
  );
}

export default App;
