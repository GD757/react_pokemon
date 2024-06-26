import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {

  const getPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      //console.log(response.data.sprites.front_default);
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  getPokemon();

  return (
    <>
    <div className="body">
      <h1>
        Pokemon!!
      </h1>
        <div className="container">
          <img src="" alt="Pokemon Image" />
          </div>
    <button id="myButton">
      GENERATE TEAM
    </button>
        </div>

        
    </>
    
  )
}

export default App
