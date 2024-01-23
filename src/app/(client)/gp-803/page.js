import dynamic from "next/dynamic";
const ClientSide = dynamic(() => import("./ClientSide"), {
  loading: () => <p>Loading...</p>,
});

async function getProductsByStatus(product_code) {
  // const res = await db.Products.findOne({
  //   where: {
  //     product_code: product_code,
  //   },
  //   raw: true,
  //   nest:true,
  // });
  // return res;

  const res = await fetch(
    `${process.env.BASE_URL}/api/products?product_code=${product_code}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

const LadingPageOne = async () => {
  const GP803B = await getProductsByStatus("zadez-gp-803b");
  const GP803BW = await getProductsByStatus("zadez-gp-803bW");
  return <ClientSide GP803B={GP803B} GP803BW={GP803BW} />;
};

export default LadingPageOne;
