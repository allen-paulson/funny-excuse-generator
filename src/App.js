import './App.css';
import Axios from 'axios'
import { useEffect, useState } from 'react';


function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState({});
  
  const fetchExcuse = (typeOfExcuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${typeOfExcuse}/`).then(
      (result) => {
        setGeneratedExcuse(result.data[0]);
      }
    );
  };



  return (
    <div className="container">
      <h1>Find your perfect excuse!</h1>
      <div className='options'>
        <button onClick={() => fetchExcuse('family')}>Family</button>
        <button onClick={() => fetchExcuse('office')}>Office</button>
        <button onClick={() => fetchExcuse('children')}>Children</button>
        <button onClick={() => fetchExcuse('college')}>College</button>
        <button onClick={() => fetchExcuse('party')}>Party</button>
        <button onClick={() => fetchExcuse('funny')}>Funny</button>
        <button onClick={() => fetchExcuse('unbelievable')}>Unbelievable</button>
        <button onClick={() => fetchExcuse('developers')}>Developers</button>
        <button onClick={() => fetchExcuse('gaming')}>Gaming</button>
      </div>
      <div className='excuse'>
        <h2> {generatedExcuse.excuse} </h2>
      </div>
    </div>
  );
}

export default App;
