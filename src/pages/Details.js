import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Footer from "../parts/Footer";
import Sitemap from "../parts/Sitemap";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/12345", name: "Office Room" },
          { url: "/categories/12345/products/6789", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
