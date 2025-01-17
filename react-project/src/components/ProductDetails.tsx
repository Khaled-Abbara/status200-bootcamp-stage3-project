interface ProductDetailsProps {
  data: {
    food_id: number;
    food_title: string;
    food_price: string;
    food_description: string;
    food_vegan: number;
    portion_size: number;
    photo_path: string;
    food_ingredients: string;
    category_id: number;
  };
}

function ProductDetails({ data }: ProductDetailsProps) {
  const ingredients = data.food_ingredients.split(",");
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-sm-12 col-md-6">
          <img
            className="img-fluid"
            style={{ width: "600px" }}
            src={data.photo_path}
            alt="Product"
          />
        </div>

        {/* Product Details */}
        <div className="col-sm-12 col-md-6 d-flex flex-column p-1 gap-1">
          <h1>{data.food_title}</h1>
          <h2>{data.food_price}$</h2>
          <h5 className="text-muted">
            Vegan friendly:{" "}
            {data.food_vegan ? (
              <span className="badge text-bg-success">Yes</span>
            ) : (
              <span className="badge text-bg-danger">No</span>
            )}
          </h5>
          <h5 className="text-muted">
            Portion Size: <span className="badge text-bg-secondary">4</span>
          </h5>
          <h5 className="text-muted">
            <div className="mb-3"> Ingredients:</div>
            {ingredients.map((ingredient) => (
              <span className="badge text-bg-primary">{ingredient}</span>
            ))}
          </h5>
          <button className="btn btn-danger mb-3">Add to Cart</button>
          <div>
            <h5 className="">Food description:</h5>
            <p>{data.food_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
