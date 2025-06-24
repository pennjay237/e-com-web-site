import React from "react";
import Hero from "../../component/Hero/Hero";
import FlashSales from "../../component/FlashSales/FlashSales";
import Categories from "../../component/Categories/Categories";
import BestSelling from "../../component/BestSelling/BestSelling";
import Banner from "../../component/Banner/Banner";
import Products from "../../component/Products/Products";
import NewArrivals from "../../component/NewArrivals/NewArrivals";
import Services from "../../Services/Services";
import "./Home.css";
import homepageData from "../../data/hompageData.json";



function Home() {
  return (
    <div className="home">
      <Hero data={homepageData.hero} />
      <FlashSales data={homepageData.flashSales} />
      <Categories data={homepageData.categories} />
      <BestSelling data={homepageData.bestSelling} />
      <Banner data={homepageData.banner} />
      <Products data={homepageData.products} />
      <NewArrivals data={homepageData.newArrivals} />
      <Services data={homepageData.services} />
    </div>
  );
}

export default Home;
