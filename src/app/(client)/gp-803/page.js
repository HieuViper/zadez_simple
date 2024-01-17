
// const ClientSide = dynamic(() => import('./ClientSide'))
import ClientSide from './ClientSide'
const Page = async () => {
    // const {
    //     data: productBlack,
    // } = useSWRData(`/api/products?product_code=zadez-gp-803b`);
    // const {
    //     data: productWhite,
    // } = useSWRData(`/api/products?product_code=zadez-gp-803bw`);

    // console.log(' productBlack:', productBlack);
    // console.log(' productWhite:', productWhite);
    return (
        <div><ClientSide /></div>
    )
}

export default Page