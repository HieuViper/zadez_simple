import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./_components/home-page"), {
  loading: () => <p>Loading...</p>,
});
// const HomePage = lazy(() => import("./_components/home-page"));

async function getOutstandingProducts() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products?status=outstanding`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function getNewProducts() {
  const res = await fetch(`${process.env.BASE_URL}/api/products?status=new`);
  console.log("🚀 ~ getNewProducts ~ res:", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function getBestSeller() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products?status=outstanding`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Home() {
  const { data: outstandingProducts } = await getOutstandingProducts();
  const { data: newProducts } = await getNewProducts();
  const { data: bestSeller } = await getBestSeller();
  // console.log("outstandingProducts :", outstandingProducts);
  // console.log("newProducts :", newProducts);
  // console.log("bestSeller :", bestSeller);

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <HomePage
        outstandingProducts={outstandingProducts}
        newProducts={newProducts}
        bestSeller={bestSeller}
      />
      {/* </Suspense> */}
    </>
  );
}
