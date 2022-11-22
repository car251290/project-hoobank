import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Bookings = (props) => {
  const [Input,setInput] = useState([]);
  const [InvalidHackers, setInvalidHackers] = useState([]);   
  const [Hacker, setHacker]= useState([]);
  const [Date, setDate]= useState([]);


  const handleInputChange= (e) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      
      setInput({[name]: value});
      console.log(Input)
  }
  const handleButtonClicked= () => {
    setInvalidHackers({InvalidHackers: getInvalidHackers()})
    console.log(InvalidHackers)
}

const getInvalidHackers = () => {
  const hackers = parseHackers();
  const dates = parseDates();
  
  console.log({hackers: hackers, dates: dates})
  
  let invalidHackers = [];
  for (let i=0; i<hackers.length; i++) {
      const hacker = hackers[i];
      if (isDateInvalid(dates[i])) {
          invalidHackers.push(setHacker);
      }
      
  }
  
  console.log({invalidHackers: invalidHackers});
  
  return invalidHackers;
}
const parseHackers = () => {
  return parseLines(Hacker);
}

const parseDates = () => {
  return parseLines(Date).map(dateRange => {
      const fromAndToDateSplit = dateRange.split(" to ");
      return {
          from: Date.parse(fromAndToDateSplit[0]),
          to: Date.parse(fromAndToDateSplit[1])
      };
      
  });
}

const isDateInvalid = (date) => {
  return date === undefined || isNaN(date.to) || isNaN(date.from) || date.to < date.from;
}

const parseLines =( textFieldContent) => {
  if (textFieldContent !== undefined) {
      return textFieldContent.split('\n');
  } else {
      return [];
  }
}

  return (
      <div className="row">
        <TextField
          name="hackers"
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the hacker list (one hacker per line)"
          onChange={handleInputChange}
        />
        <TextField
          name="dates"
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each hacker's stay (one range per line)"
          onChange={handleInputChange}
        />
        <Button variant="outlined" color="primary" className="block-center" onClick={handleButtonClicked}>Get Meals Schedule</Button>
        </div>);
    
}

export default Bookings;