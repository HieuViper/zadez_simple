"use client";
import store from "@/library/zustand/store";
import { Button, Divider, Drawer, Tag } from "antd";
import Image from "next/image";

const Cart = ({ data, onClose, open }) => {
  const { cartState } = store();
  console.log("🚀 ~ file: Cart.js:9 ~ Cart ~ cartState:", cartState);
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
          <>
            <div>
              <div className="flex justify-between">
                <div className="text-sm font-light">Tạm tính</div>
                <div className="text-sm font-light">500 VNĐ</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-light">Giảm giá</div>
                <div className="text-sm font-light">500 VNĐ</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-light">Phí vận chuyển</div>
                <div className="text-sm font-light">500 VNĐ</div>
              </div>
              <Divider />
              <div className="flex justify-between">
                <div className="text-base font-medium">Tổng cộng</div>
                <div className="text-base font-medium">500 VNĐ</div>
              </div>
            </div>
            <div className="py-5 w-full mb-4">
              <Button type="primary" size="large" block>
                Thanh toán
              </Button>
            </div>
          </>
        }
      >
        {data &&
          data.map((item, i) => (
            <div key={i}>
              <div className="grid grid-cols-4 gap-2 px-2 py-1 ">
                <div className="col-span-1">
                  {/* <img src={item.main_image} alt={item.name} className="w-20 object-contain" /> */}
                  <Image
                    src={item.main_image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className=""
                  />
                </div>
                <div className="col-span-3 ">
                  <h3 className="text-xs font-light">{item.name}</h3>
                  <Tag color={item.color}>{item.color}</Tag>
                  <div className="my-1">x1</div>
                  <div className="flex justify-end">
                    <div>
                      {item.discount_price ? item.discount_price : item.price}
                      VNĐ
                    </div>
                  </div>
                </div>
              </div>
              <Divider style={{ margin: 0 }} />
            </div>
          ))}
      </Drawer>
    </>
  );
};

export default Cart;
