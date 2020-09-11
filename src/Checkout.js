import React from "react";
import "./Checkout.css";
import CheckoutProductWrapper from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ user, basket }] = useStateValue();

  console.log(user);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PEX/PeX-Top-PC-1500X375.jpg"
          alt="checkout banner"
        />
        {basket?.length === 0 ? (
          <div className="checkout__empty">
            <h2>
              Your have no items in your basket. To buy one click on "Add to
              Basket"
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket.</h2>
            <FlipMove duration={500}>
              {basket.map((item) => (
                <CheckoutProductWrapper
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  hidden={false}
                />
              ))}
            </FlipMove>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
