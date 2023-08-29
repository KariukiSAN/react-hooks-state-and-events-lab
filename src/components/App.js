import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [themeMode, setThemeMode] = useState ('false')
  


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  function handleThemeMode (){
    //   console.log(themeMode)
    setThemeMode (!themeMode)
  }

  function toggleThemeMode() {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  }
  


  return (
    <div className={appClass}>
      <header>
      <h2>Shopster</h2>
        <button>Dark Mode</button>
        <input type="checkbox"></input>
        <button onClick={() =>toggleThemeMode()}>{themeMode} </button>
        

      </header>


      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
