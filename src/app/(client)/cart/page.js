"use client";

import dynamic from "next/dynamic";

const CartPageComp = dynamic(() => import("./_components/CartPageComp"), {
  ssr: false,
});

const CartPage = () => {
  return <CartPageComp />;
};

export default CartPage;
