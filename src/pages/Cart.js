import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ShippingDetails from "../parts/Cart/ShippingDetails";
import ShoppingCart from "../parts/Cart/ShoppingCart";
// import ProductDetails from "../parts/Details/ProductDetails";
// import Suggestion from "../parts/Details/Suggestion";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

export default function Cart() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
