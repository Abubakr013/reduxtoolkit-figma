import "./home.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../../features/basketThunk";

function Home() {
  const dispatch = useDispatch();

  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  const addToCart = (product) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    basket.push(product);

    localStorage.setItem("basket", JSON.stringify(basket));
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <section>
      <div className="new-arrivals">
        <h1 className="title">NEW ARRIVALS</h1>

        <div className="products">
          {products.slice(2, 6).map((product) => (
            <div className="card" key={product.id}>
              <div className="image-box">
                <img src={product.images} alt={product.title} />
              </div>

              <h3 className="product-name">{product.title}</h3>

              <div className="rating">
                <span className="stars">★★★★★</span>
                <span>{product.rating}/5</span>
              </div>

              <div className="price">
                <span className="current">${product.price}</span>
              </div>

              <button className="add-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <button className="view-all">View All</button>
      </div>

      <hr />

      <div className="new-arrivals">
        <h1 className="title">TOP SELLING</h1>

        <div className="products">
          {products.slice(20, 24).map((product) => (
            <div className="card" key={product.id}>
              <div className="image-box">
                <img src={product.images} alt={product.title} />
              </div>

              <h3 className="product-name">{product.title}</h3>

              <div className="rating">
                <span className="stars">★★★★★</span>
                <span>{product.rating}/5</span>
              </div>

              <div className="price">
                <span className="current">${product.price}</span>
              </div>

              <button className="add-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <button className="view-all">View All</button>
      </div>
    </section>
  );
}

export default Home;
