import React, {useState} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


const App = ({handleButtonClicked,handleInputChange,invalidHackers}) => {
      
        return (
            
            <div className="container-fluid">
            <center>
                <h2>Hacker Hostel</h2>
            </center>
            <div className="container">
                <Bookings handleInputChange={handleInputChange} handleButtonClicked={handleButtonClicked}></Bookings>
                <Error invalidHackers={invalidHackers}></Error>
                <Meals></Meals>
            </div>
        </div>
        )
}

export default App;
