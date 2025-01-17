import AddToCart from "./AddToCart";

interface Properties {
  data: {
    food_title: string;
    food_id: number;
    food_url: string;
    food_price: string;
    photo_path: string;
  };
}
function ProductCard({ data }: Properties) {
  return (
    <div className="d-flex flex-column shadow-sm">
      <a className="text-decoration-none" href={`/product/${data.food_url}`}>
        <img
          style={{ width: "200px", height: "200px" }}
          src={data.photo_path}
          alt=""
        />
        <p>{data.food_title}</p>
        <p>{data.food_price} $</p>
      </a>
      <AddToCart innerText="Add to cart" foodId={data.food_id} />
    </div>
  );
}

export default ProductCard;

{
  /* <a
      className="col-2 text-decoration-none"
      href={`/product/${data.food_url}`}>
      <div className="d-flex flex-column shadow-sm">
        <img src="https://placehold.co/100x100" alt="" />
        <h4>{data.food_title}</h4>
        <p>{data.food_price} $</p>
        <button className="btn btn-danger">Add to Cart</button>
      </div>
    </a> */
}
