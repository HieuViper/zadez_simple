import store from "@/library/zustand/store";
import { DeleteTwoTone, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Tooltip, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
const CartPageComp = () => {
  const {
    userState,
    cartState,
    increseAmount,
    decreaseAmount,
    removeFromCart,
    toggleModal,
  } = store();
  console.log("🚀 ~ CartPageComp ~ userState:", userState);
  console.log("🚀 ~ CartPage ~ cartState:", cartState);
  const router = useRouter();
  return cartState?.cartItems.length > 0 ? (
    <div>
      <ol className="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg  sm:text-base  sm:p-4 sm:space-x-4 mb-4 mt-0">
        <li className="flex items-center text-primary">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs bg-primary text-white rounded-full shrink-0 ">
            1
          </span>
          Cart
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs bg-gray-400 text-white rounded-full shrink-0 ">
            2
          </span>
          Checkout
        </li>
      </ol>

      <div className="grid lg:grid-cols-12 grid-cols-1 gap-24">
        <div className="lg:col-span-8 gap-8 flex flex-col">
          {cartState.cartItems.map((item, index) => (
            <Card
              data={item}
              key={index}
              increase={increseAmount}
              decrease={decreaseAmount}
              remove={removeFromCart}
            />
          ))}
        </div>
        <div className="lg:col-span-4 h-fit p-4 border border-slate-100 border-solid rounded-xl shadow-sm flex flex-col gap-5 ">
          <div className="text-xl font-[500]">Đơn hàng của bạn</div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span>Tổng giá sản phẩm</span>
              <span>{cartState.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Giảm giá</span>
              <span>-0.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Phí vận chuyển</span>
              <span>Free</span>
            </div>
            <Divider style={{ marginTop: 0, marginBottom: 0 }} />
            <div className="flex justify-between font-[500] text-xl">
              <span>Tổng Hoá Đơn</span>
              <span>{cartState.total.toLocaleString()}</span>
            </div>
          </div>
          <Button
            type="primary"
            onClick={() => {
              if (!userState.token) {
                toggleModal(true);
                message.warning("Vui lòng đăng nhập để thanh toán");
              } else {
                router.push("/thanh-toan");
              }
            }}
          >
            Đi đến thanh toán
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center gap-10 py-32">
      <Image
        src="/images/empty-cart.png"
        width={100}
        height={100}
        alt="empty cart"
        className="w-1/3 h-1/3"
      />
      <div className="text-xl">No Item Found In Cart</div>
    </div>
  );
};

export default CartPageComp;

const Card = ({ data, increase, decrease, remove }) => {
  return (
    <div className="grid grid-cols-12 p-3 border border-solid border-slate-50 shadow rounded-xl">
      <div className="col-span-4 flex justify-center items-center">
        <Image
          src={data.products.main_image || "/no-image.jpg"}
          width={100}
          height={100}
          className="rounded-xl w-auto h-full"
          alt=""
        />
      </div>
      <div className="col-span-8 flex flex-col gap-3">
        <div className="font-[500] uppercase text-xl">{data.products.name}</div>

        <div className="flex flex-col text-xs">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-black"></div>
            Black
          </div>
          <div className="flex gap-2">Free Shipping</div>
          <div className="flex gap-2">In Stock</div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="line-through text-sm text-gray-300">1,230,000₫</div>
            <div className="text-lg font-[500]">
              {data.products.price.toLocaleString()}₫
            </div>
          </div>
          <div className="flex gap-2">
            <DeleteTwoTone
              twoToneColor={"red"}
              onClick={() => {
                remove(data.products.id);
              }}
            />
            <div className="flex gap-3 items-center">
              {data.amount > 1 && (
                <Tooltip title="Giảm">
                  <Button
                    type="primary"
                    shape="circle"
                    size="small"
                    icon={<MinusOutlined />}
                    onClick={() => {
                      decrease(data.products.id);
                    }}
                  />
                </Tooltip>
              )}
              <div className="">{data.amount}</div>
              <Tooltip title="Tăng">
                <Button
                  type="primary"
                  shape="circle"
                  size="small"
                  icon={<PlusOutlined />}
                  onClick={() => increase(data.products.id)}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
