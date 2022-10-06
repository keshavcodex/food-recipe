import React from "react";

function RecipeItem(props) {
  const { label, image, ingredientLines } = props;

  return (
    <div className="col-md-3">
      <div className="card py-2 text-center">
        <img src={image} className="card-img-top mx-auto" alt="food img" />
        <div className="card-body">
          <h5>{label}</h5>
          <div className="d-flex justify-content-center">
            <div className="dropdown-center">
              <button
                className="btn btn-sm btn-outline-danger dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ingredient
              </button>
              <ul className="dropdown-menu list-group-flush">
                {ingredientLines.map((ingredient) => (
                  <li className="dropdown-item list-group-item-danger">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeItem;
