import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, capital, flag,region} = props.country;
    const handleAddCountry =props.handleAddCountry;
    
    return (
        <div className='country-info'>
            <img src= {flag} alt=""/>
            <h2> Name :---- {name}</h2>
            <h3>Population : {population}</h3>
            <h4>Capital : {capital}</h4>
            <h5>Region : {region}</h5>
            <button style={{padding:'8px 50px', backgroundColor:'gold', fontWeight:'bold', borderRadius:'5px',border:'none'}} onClick={() =>handleAddCountry(props.country)} >Add Country</button>
            
            
        </div>
    );
};

export default Country;