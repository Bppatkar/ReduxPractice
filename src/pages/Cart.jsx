import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
    // console.log(productId);
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartwrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
