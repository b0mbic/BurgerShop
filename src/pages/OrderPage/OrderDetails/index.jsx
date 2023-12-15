import './orderDetails.scss';

export const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address:</b>Esc. 597 Bloque José María, 22 Puerta 462,
            Alcobendas, Mur 47391
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>Charles Bukowski</p>
          <p>
            <b>Phone:</b>+91 0000-111111
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order status:</b>Processing
          </p>
          <p>
            <b>Order date:</b>17-12-2023
          </p>
          <p>
            <b>Order fullfilment date:</b>17-12-2023
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment method:</b>COD
          </p>
          <p>
            <b>Payment refecence:</b>#45454854
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items total:</b>enough to feed the Godzilla
          </p>
          <p>
            <b>Shipping charges:</b>₹26
          </p>
          <p>
            <b>Tax:</b>₹15
          </p>
          <p>
            <b>Total amount:</b>₹1564
          </p>
        </div>
        <article>
          <h1>Ordered items</h1>
          <div>
            <h4>Cheese burger</h4>
            <h4>₹1234</h4>
          </div>
          <div>
            <h4>Cheese burger & fries</h4>
            <h4>₹4321</h4>
          </div>
          <div>
            <h4>Veg. Cheese Burger</h4>
            <h4>₹7890</h4>
          </div>
          <div>
            <h4>
              <b>Sub. Total</b>
            </h4>
            <h4>
              <b>₹9987</b>
            </h4>
          </div>
        </article>
      </main>
    </section>
  );
};
