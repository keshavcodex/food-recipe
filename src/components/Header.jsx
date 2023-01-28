import React from "react";
// import {sum} from "../App";

const Header = (props) => {
  const { search, onInputChange, onSearchClick } = props;
  const something = (e) =>{
    console.log(e);
  }
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i className="material-icons brand-icon">fastfood</i> Food Recipe
      </h1>
      <div className="input-group w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search Your Food..."
            value={search}
            onChange={onInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" onClick={onSearchClick} onKeyDown={(e) => something(e) }>
              Search Recipe
            </button>
          </div>
      </div>
    </div>
  );
};

export default Header;
