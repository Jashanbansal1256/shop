import { useDispatch,useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const {cart} = useSelector(state=>state);
  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  function handleRemoveFromCart() {
    console.log('removed from cart');

    dispatch(removeFromCart(product.id));
  }
  return (
    <div>
      <div
        className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 mp-5
           rounded-xl"
      >
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          ></img>
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={  cart.some(item=>item.id === product.id) ?  handleAddToCart : handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {
              cart.some(item=>item.id === product.id) ? 'remove from cart' : 'add to cart'
            }
          </button>
        </div>
      </div>
    </div>
  );
}
