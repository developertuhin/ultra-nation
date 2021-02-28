import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
    .catch (error => console.log(error))
  },[])
 

  return (
    <div className="App">
      <h2>Countries Loaded : {countries.length}</h2>
      <ul>
        {
          countries.map( country => <li>{country.name}</li>)
        }
      </ul>
   
    </div>
  );
}

export default App;
