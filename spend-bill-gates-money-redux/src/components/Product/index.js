// import data from "../../products.json";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateCount } from "../../redux/productsSlice";

import "./index.css";

function Product(product) {
  const money = useSelector((state) => state.products.money);

  const [count, setCount] = useState(parseInt(product.item.count));
  const [isSellable, setIsSellable] = useState(true);
  const [isBuyable, setIsBuyable] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    count > 0 ? setIsSellable(false) : setIsSellable(true);
    dispatch(updateCount({ id: product.item.id, count }));
  }, [count]);

  useEffect(() => {
    product.item.productPrice > money ? setIsBuyable(true) : setIsBuyable(false);
  }, [money]);

  useEffect(() => {
    setCount(product.item.count);
  }, [product]);

  const handleInputChange = (value) => {
    const max = Math.floor(money / product.item.productPrice) + count;
    if (value && value > 0) {
      if (value > max && money >= 0) {
        setCount(max);
      } else {
        setCount(value);
      }
    } else {
      setCount(0);
    }
  };


  return (
    <div className="products">
      <div className="product-info">
        <img className="product-image" src={product.item.image} alt="" />
        <div className="product-name">{product.item.productName}</div>
        <div className="product-price">${product.item.productPrice}</div>
        <div className="sell-info">
          <button
            className="sell-btn"
            onClick={() => setCount(parseInt(count) - 1)}
            isDisabled={isSellable}
          >
            Sell
          </button>
          <input
            type="number"
            value={parseInt(count)}
            className="product-count"
            onChange={(e) => parseInt(handleInputChange(e.target.value))}
          />
          <button
            className="buy-btn"
            onClick={() => setCount(parseInt(count) + 1)}
            isDisabled={isBuyable}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
