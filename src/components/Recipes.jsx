import React from "react";
import "./Recipes.css";
import RecipeItem from "./RecipeItem";

function Recipes(props) {
  const { recipes } = props;
  return (
    <div>
      <div className="early">
        <div className="animate-fading col-md-3">
          <div className="card py-2 text-center">
            <div className="grey_box"></div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="dropdown-center">
                  <div className="grey_button"></div>
                  <ul className="dropdown-menu list-group-flush">
                    <li>1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-fading col-md-3">
          <div className="card py-2 text-center">
            <div className="grey_box"></div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="dropdown-center">
                  <div className="grey_button"></div>
                  <ul className="dropdown-menu list-group-flush">
                    <li>1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-fading col-md-3">
          <div className="card py-2 text-center">
            <div className="grey_box"></div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="dropdown-center">
                  <div className="grey_button"></div>
                  <ul className="dropdown-menu list-group-flush">
                    <li>1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-fading col-md-3">
          <div className="card py-2 text-center">
            <div className="grey_box"></div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="dropdown-center">
                  <div className="grey_button"></div>
                  <ul className="dropdown-menu list-group-flush">
                    <li>1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-fading col-md-3">
          <div className="card py-2 text-center">
            <div className="grey_box"></div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="dropdown-center">
                  <div className="grey_button"></div>
                  <ul className="dropdown-menu list-group-flush">
                    <li>1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-fading col-md-3">
          <div className="card py-2 text-center">
            <div className="grey_box"></div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="dropdown-center">
                  <div className="grey_button"></div>
                  <ul className="dropdown-menu list-group-flush">
                    <li>1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-fading col-md-3">
          <div className="card py-2 text-center">
            <div className="grey_box"></div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="dropdown-center">
                  <div className="grey_button"></div>
                  <ul className="dropdown-menu list-group-flush">
                    <li>1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-fading col-md-3">
          <div className="card py-2 text-center">
            <div className="grey_box"></div>
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="dropdown-center">
                  <div className="grey_button"></div>
                  <ul className="dropdown-menu list-group-flush">
                    <li>1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row height: 5px late">
        {recipes.map((recipe) => (
          <RecipeItem
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
