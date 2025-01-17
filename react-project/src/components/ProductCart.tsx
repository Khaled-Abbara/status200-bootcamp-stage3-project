interface Properties {
  data: {
    food_title: string;
    food_url: string;
    food_price: string;
    photo_path: string;
    quantity: number;
  };
}

function ProductCart({ data }: Properties) {
  return (
    <>
      <a className="text-decoration-none" href={`/product/${data.food_url}`}>
        <div className="d-flex align-items-center justify-content-between shadow-sm p-1 rounded">
          <img src={data.photo_path} style={{ width: "60px" }} alt="" />
          <span>{data.food_title}</span>
          <span>{data.food_price}$</span>
          <span className="p-3">qty: {data.quantity}</span>
        </div>
      </a>
    </>
  );
}

export default ProductCart;
