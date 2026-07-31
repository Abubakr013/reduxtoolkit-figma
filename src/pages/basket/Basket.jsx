import { useEffect, useState } from "react";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import "./basket.css";

function Basket() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(data);
  }, []);

  return (
    <div className="basket">
      <h1>YOUR CART</h1>
      <br />
      <div className="basket-container">
        {basket.map((item) => (
          <div className="basket-card" key={item.id}>
            <div className="basket-card_about">
              <img src={item.images} alt={item.title} width={100} />
              <div className="basket-card_text">
                <h3>{item.title}</h3>
                <p>Size: </p>
                <p>Color: </p>
                <br />
                <h1>{item.price}</h1>
              </div>
            </div>
            <div className="basket-card_buttons">
              <button className="delete-btn">
                <FiTrash2 />
              </button>
              <div className="incdec">
                <button className="increment">
                  <FiPlus />
                </button>
                <span>1</span>
                <button className="decrement">
                  <FiMinus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
