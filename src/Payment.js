import React, { useState, useEffect } from "react";
import CheckoutProductWrapper from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";
import { Link } from "@material-ui/core";
import "./Payment.css";
import { useHistory } from "react-router-dom";
import axios from "./axios";
import { db } from "./firebase";

import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeded, setSucceded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const stripe = useStripe();
  const element = useElements();

  console.log(user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent,
            created: paymentIntent.created,
          });

        history.replace("/orders");
      });
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const getBasketTotal = (basket) => {
    let total = 0;
    basket.forEach((element) => {
      total = total + element.price;
    });
    return total;
  };

  return (
    <div className="payment">
      <h1>Checkout {<Link to="/checkout">{basket?.length}</Link>}</h1>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Dilevery Adress</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Dilevery Adress</p>
            <p>Dilevery Adress</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delevery</h3>
          </div>
          <div className="payment__items">
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
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delevery</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
