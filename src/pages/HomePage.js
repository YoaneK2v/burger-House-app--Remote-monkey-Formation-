import React from "react";
import HeroTop from "../components/marketing/pageSection/heroTop";
import LastProducts from "../components/marketing/pageSection/lastProducts";
import Products from "../components/marketing/pageSection/products";
import Event from "../components/marketing/pageSection/event";
import Booking from "../components/marketing/pageSection/booking";
import Footer from "../components/marketing/pageSection/footer";

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
      <Booking />
      <Footer />
    </>
  );
}
