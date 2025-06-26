
import React from "react";
import FlashSales from "../../component/FlashSales/FlashSales";
import BestSelling from "../../component/BestSelling/BestSelling";
import wishlistData from "../../data/wishlistData.json"; 
import Styles from "./WishList.module.css"; 

function WishList() {
  return (
    <div className={Styles.WishList}>
      <h1>My Wish List</h1>
      <FlashSales data={wishlistData.flashSales} />
      <BestSelling data={wishlistData.bestSelling} />
    </div>
  );
}

export default WishList;
