import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";

function App() {
  const [search, setSerach] = useState("burger");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  
  useEffect(() => {
    getRecipes(); // eslint-disable-next-line
  }, []);

  const getRecipes = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}
export const sum = () => {
  console.log("sum")
}
export default App;
// export {getRecipes};
