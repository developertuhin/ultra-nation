import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  const[countries, setCountries] = useState([]);
  const [cart , setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
    .catch (error => console.log(error))
  },[])
 
  const handleAddCountry= (country) => {
    const newCart = [...cart , country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <h2>Countries Loaded : {countries.length}</h2>
      <h3>Country Added : {cart.length}</h3>
      <Cart cart = {cart}></Cart>
        {
          // countries.map(country => <Country name ={country.name}></Country>)
        }
        {
          countries.map( country => <Country  country ={country} handleAddCountry ={handleAddCountry} key={country.alpha3Code}></Country>)
        }
   
    </div>
  );
}

export default App;
