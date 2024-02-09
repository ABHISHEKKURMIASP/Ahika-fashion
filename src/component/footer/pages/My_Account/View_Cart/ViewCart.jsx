import "./viewCart.css"
import { Link } from "react-router-dom";

function ViewCart() {
    return (
        <>
            <div id="viewCartouterDiv">
                <div id="cartHeading">
                    <h2>CART</h2>
                    <div id="continueLink">
                        <div id="line"></div>
                        <Link to="/">CONTINUE SHOPPING</Link>
                    </div>
                </div>
                <div id="cartContent">
                    <p>Your cart is empty</p>
                    <Link to="/" id="continueShopBtn2">Continue shopping</Link>
                </div>
                <div id="cartlogin">
                    <p id="haveAnAcc">Have an account?</p>
                    <p><Link to="/sign-in" id="loginBtn">Login</Link> to check out faster.</p>
                </div>
            </div>
        </>
    )
}

export default ViewCart;