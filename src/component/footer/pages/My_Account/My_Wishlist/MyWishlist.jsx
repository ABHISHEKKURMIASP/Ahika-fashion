import "./myWishlist.css";
import { Link } from "react-router-dom";

const MyWishlist = () => {
  return (
    <>
      <div id="outerDiv">
        <div id="myWishlistDiv">
            <p id="myWishlistHeading">My Wishlist</p>
            <p id="guest1">Guest Shopper</p>
        </div>
        <div id="myWishlistmenu">
            <button >
            <img src="https://static.thenounproject.com/png/3237996-200.png" alt="Menu" />
            </button>
        </div>
        <div id="continueMW">
            <p id="continuep1">Love It? Add To My Wishlist</p>
            <p id="continuep2">My Wishlist allows you to keep track of all of your favorites and shopping activity whether you're on your computer, phone, or tablet. You won't have to waste time searching all over again for that item you loved on your phone the other day - it's all here in one place!</p>
            <Link to="/" id="continueBtn">Continue Shopping</Link>
        </div>
      </div>
    </>
  );
};

export default MyWishlist;
