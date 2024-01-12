"use client";
import dynamic from "next/dynamic";

const CheckoutPageComp = dynamic(
  () => import("./_components/CheckoutPageComp"),
  {
    ssr: false,
  }
);
const CheckoutPage = () => {
  return <CheckoutPageComp />;
};

export default CheckoutPage;
