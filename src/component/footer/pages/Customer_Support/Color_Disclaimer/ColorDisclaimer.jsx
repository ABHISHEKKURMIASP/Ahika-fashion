import "./colorDisclaimer.css";
import { Link } from "react-router-dom";

const ColorDisclaimer = () => {
  return (
    <>
      <div id="colorDisclaimer">
        <div>
          <div>
            <h2 id="colorDisclaimerHeading">COLOR DISCLAIMER</h2>
          </div>
        </div>
        <div>
          <p>
            <strong>COLOR DISCLAIMER</strong>
          </p>
          <p>
            <span lang="EN-IN">
              At,{" "}
              <Link path="https://ahika.in/" style={{ color: "black" }}>
                Ahika.in
              </Link>
              , we understand that people shopping online, expects the exact and
              accurate look of the product displayed on website. However, there
              are few factors which affects the appearance of the product in
              real in comparison with website image.
            </span>
          </p>
          <p>
            <span lang="EN-IN">
              You understand that the actual product color may vary from the
              website image due to various reasons like: -
            </span>
          </p>
          <ol>
            <li>
              We all know that every screen is different. All devices like
              computer, laptop, mobile has different display capability.
            </li>
            <li>
              Also, during photography, indoor or outdoor lightings may affect
              the color and appearance of the product
            </li>
          </ol>
          <p>
            <span lang="EN-IN">
              Please understand that we cannot control the screen display and
              actual product color difference.
            </span>
          </p>
          <p>
            <span lang="EN-IN">
              However, we have made every effort to display our products appear
              as life-like as possible, we cannot guarantee that your monitor's
              display of a colour will be completely accurate.
            </span>
          </p>
          <p>
            <span lang="EN-IN">
              With your every purchase you agree that the slight variation is
              unavoidable and this is not factory fault.
            </span>
          </p>
          <p>
            <strong>WASHCARE</strong>
          </p>
          <p>
            <span lang="EN-IN">
              Cotton fabric is prone to bleed a little in first 2 to 3 washes.
              Also, moderate shrinkage is very common with cotton products.
            </span>
          </p>
          <p>
            <strong>FITTINGS</strong>
          </p>
          <p>
            We have <strong>size charts</strong> below products for your
            assistance.
          </p>
          <p>
            <span lang="EN-IN">
              Remember, every outfits have a different fitting and draping
              depending on the styling, cut and type of fabric.
            </span>
          </p>
          <p>
            Hence, you will have to{" "}
            <strong>
              check our{" "}
              <Link
                to="/size-charts"
                title="Size chart"
                style={{ color: "black" }}
              >
                size charts
              </Link>
            </strong>
            &nbsp;to help you decide the right fitting for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default ColorDisclaimer;
