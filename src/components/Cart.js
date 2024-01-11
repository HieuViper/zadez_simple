"use client";
import { getCartStateFromLocalStorage, moneyToString } from "@/library/util";
import { Button, Divider, Drawer, Tag } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import store from "@/library/zustand/store";

const Cart = ({ onClose, open }) => {
  const ButtonGroup = Button.Group;
  const { increseAmount, decreaseAmount, removeFromCart } = store();
  const data = getCartStateFromLocalStorage();
  const cartState = getCartStateFromLocalStorage();
  const router = useRouter();
  return (
    <>
      <Drawer
        title="Giỏ hàng"
        placement="right"
        onClose={onClose}
        open={open}
        width={520}
        // getContainer={false}
        footer={
          data?.cartItems.length > 0 ? (
            <>
              <div>
                <div className="flex justify-between">
                  <div className="text-sm font-light">Tạm tính</div>
                  <div className="text-sm font-light">{moneyToString(data?.total)} ₫</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm font-light">Giảm giá</div>
                  <div className="text-sm font-light">0 ₫</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm font-light">Phí vận chuyển</div>
                  <div className="text-sm font-light">0 ₫</div>
                </div>
                <Divider />
                <div className="flex justify-between">
                  <div className="text-base font-medium">Tổng cộng</div>
                  <div className="text-base font-medium">{moneyToString(data?.total)} ₫</div>
                </div>
              </div>
              <div className="py-5 w-full mb-4">
                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={() => router.push("/gio-hang")}
                >
                  Thanh toán
                </Button>
              </div>
            </>
          ) : (
            <></>
          )
        }
      >
        {data?.cartItems.length > 0 ? (
          data.cartItems.map((item, i) => (
            <div key={i}>
              <div className="grid grid-cols-4 gap-2 px-2 py-2 ">
                <div className="col-span-1">
                  <Image
                    src={item.products.main_image}
                    alt={item.products.name}
                    width={80}
                    height={80}
                    className=""
                  />
                </div>
                <div className="col-span-2 ">
                  <h3 className="text-lg font-medium mb-2">{item.products.name}</h3>
                  <div className="mb-2">
                    {item.products.color && <Tag color={item.products.color}>{item.products.color}</Tag>}
                  </div>
                  <ButtonGroup>
                    <Button onClick={() => {
                      decreaseAmount(item.products.id);
                    }} icon={<MinusOutlined />} />
                    <Button >{item.amount}</Button>
                    <Button onClick={() => increseAmount(item.products.id)} icon={<PlusOutlined />} />
                  </ButtonGroup>
                </div>
                <div className="col-span-1 grid grid-rows-2 items-end">
                  <Button danger icon={<DeleteOutlined />} className="mx-4" onClick={() => {
                    removeFromCart(item.products.id);
                  }}>Xóa</Button>
                  <span className="mt-6">
                    {item.products.discount_price
                      ? moneyToString(item.products.discount_price)
                      : moneyToString(item.products.price)}
                    ₫
                  </span>
                  {/* </div> */}
                </div>
              </div>
              <Divider style={{ margin: 0 }} />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center text-lg"> Trống</div>
        )}
      </Drawer>
    </>
  );
};

export default Cart;
