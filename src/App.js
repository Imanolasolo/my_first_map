// import libraries and dependences
import React from "react";
import './App.css';

import MapView from "./components/MapView"


//Main Function (1.Title 2.map)
function App() {
  return (
    <div className="container"> 
      <h1>Interactive Map</h1>
      
      <MapView />
      
    </div>
  );

}
//Export app for general functions
export default App;
