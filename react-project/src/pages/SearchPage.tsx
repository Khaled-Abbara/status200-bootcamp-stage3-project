import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navigation from "../components/Header";

import { useState, useEffect } from "react";

// Define the type for the food items
interface Food {
  food_id: number;
  food_title: string;
  food_price: string;
  food_vegan: number;
  portion_size: number;
  photo_path: string;
  food_ingredients: string;
  category_id: number;
}

function SearchPage() {
  const sentences: string[] = [
    "Vegan?",
    "Something with Beef?",
    "What about a lemonade?",
    "Search for any ingredient",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length); // Loop through the array
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  // Use the Food type for searchResults state
  const [searchResults, setSearchResults] = useState<Food[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/search`);
      const result = await response.json();
      setSearchResults(result);
    };
    fetchData();
  }, []);

  // State to track the search input
  const [inputSearch, setInputSearch] = useState("");

  // Filter the results based on the inputSearch
  var filteredResults = searchResults.filter((food) =>
    food.food_title.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const [isIngredient, setIsIngredient] = useState(false);

  const handleButtonClick = () => {
    setIsIngredient(!isIngredient);
  };

  isIngredient
    ? (filteredResults = searchResults.filter((food) =>
        food.food_ingredients.toLowerCase().includes(inputSearch.toLowerCase())
      ))
    : null;

  return (
    <>
      <Announcement />
      <Navigation />
      <div className="p-5">
        <div className="container d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder={sentences[index]}
            value={inputSearch} // Controlled input
            onChange={(e) => setInputSearch(e.target.value)} // Update inputSearch state
          />
          <button
            onClick={handleButtonClick}
            className={`btn ${isIngredient ? "btn-success" : "btn-danger"}`}>
            {isIngredient ? "ingredient" : "Meal"}
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filteredResults.map((food) => (
            <div className="col-md-3" key={food.food_id}>
              <div className="card">
                <img
                  src={food.photo_path}
                  className="card-img-top"
                  alt={food.food_title}
                />
                <div className="card-body">
                  <h5 className="card-title">{food.food_title}</h5>
                  <p className="card-text">
                    <strong>Ingredients:</strong> {food.food_ingredients}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ${food.food_price}
                  </p>
                  <p className="card-text">
                    <strong>Portion size:</strong> {food.portion_size}
                  </p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SearchPage;
