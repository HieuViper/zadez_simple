import dynamic from "next/dynamic";
const ClientSide = dynamic(() => import("./ClientSide"), {
  loading: () => <p>Loading...</p>,
});
const LadingPageOne = async () => {
  return <ClientSide />;
};

export default LadingPageOne;
