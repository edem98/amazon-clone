import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProductWrapper = React.forwardRef(
  ({ id, title, price, image, rating, hidden }, ref) => (
    <div ref={ref}>
      <CheckoutProduct
        key={id}
        id={id}
        title={title}
        price={price}
        rating={rating}
        image={image}
        hidden={hidden}
      />
    </div>
  )
);

function CheckoutProduct({ id, title, price, image, rating, hidden }) {
  const [{}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="Product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="like">
                ⭐️
              </span>
            ))}
        </div>
        {hidden == false ? (
          <button onClick={removeFromBasket}>Remove from basket</button>
        ) : null}
      </div>
    </div>
  );
}

export default CheckoutProductWrapper;
