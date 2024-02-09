import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentMethods from '../footer/pages/Customer_Support/Payment_Methods/PaymentMethods';
import ShippingPolicy from '../footer/pages/Customer_Support/Shipping_Policy/ShippingPolicy';
import ReturnRefundExchange from '../footer/pages/Customer_Support/Return_Refund_Exchange_Policy/ReturnRefundExchangePolicy';
import PrivacyPolicy from '../footer/pages/Customer_Support/Privacy_Policy/PrivacyPolicy';
import TermsCondition from '../footer/pages/Customer_Support/Terms_Condition/TermsCondition';
import TermsService from '../footer/pages/Customer_Support/Terms_Services/TermsService';
import ColorDisclaimer from '../footer/pages/Customer_Support/Color_Disclaimer/ColorDisclaimer';
import ViewCart from '../footer/pages/My_Account/View_Cart/ViewCart';
import MyWishlist from '../footer/pages/My_Account/My_Wishlist/MyWishlist';
import ReturnAndExchanges from '../footer/pages/My_Account/Return_Exchange/ReturnAndExchange';
import ContacUs from '../footer/pages/Useful_links/Contact_Us/ContactUs';
import AboutUs from '../footer/pages/Useful_links/About_Us/AboutUs';
import SizeChart from '../footer/pages/Useful_links/Size_Chart/SizeChart';

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/return-exchange-policy" element={<ReturnRefundExchange/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/terms-of-service" element={<TermsService />} />
        <Route path="/color-disclaimer" element={<ColorDisclaimer />} />
        <Route path="/view-cart" element={<ViewCart />} />
        <Route path="/wishlist" element={<MyWishlist />} />
        <Route path="/return-center" element={<ReturnAndExchanges />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="/contact" element={<ContacUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/size-charts" element={<SizeChart />} /> 
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        
    </Routes>
    </>
  );
};

export default AppRoutes;
