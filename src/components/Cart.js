"use client";
import store from "@/library/zustand/store";
import { Button, Divider, Drawer, Tag } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = ({ onClose, open }) => {
  const { cartState: data } = store();
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
          data?.cartItems?.length > 0 ? (
            <>
              <div>
                <div className="flex justify-between">
                  <div className="text-sm font-light">Tạm tính</div>
                  <div className="text-sm font-light">{data?.total} VNĐ</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm font-light">Giảm giá</div>
                  <div className="text-sm font-light">0 VNĐ</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm font-light">Phí vận chuyển</div>
                  <div className="text-sm font-light">0 VNĐ</div>
                </div>
                <Divider />
                <div className="flex justify-between">
                  <div className="text-base font-medium">Tổng cộng</div>
                  <div className="text-base font-medium">{data?.total} VNĐ</div>
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
        {data?.cartItems?.length > 0 ? (
          data.cartItems.map((item, i) => (
            <div key={i}>
              <div className="grid grid-cols-4 gap-2 px-2 py-1 ">
                <div className="col-span-1">
                  <Image
                    src={item.products.main_image}
                    alt={item.products.name}
                    width={80}
                    height={80}
                    className=""
                  />
                </div>
                <div className="col-span-3 ">
                  <h3 className="text-xs font-light">{item.products.name}</h3>
                  <Tag color={item.products.color}>{item.products.color}</Tag>
                  <div className="my-1">x{item.amount}</div>
                  <div className="flex justify-end">
                    <div>
                      {item.products.discount_price
                        ? item.products.discount_price
                        : item.products.price}
                      VNĐ
                    </div>
                  </div>
                </div>
              </div>
              <Divider style={{ margin: 0 }} />
            </div>
          ))
        ) : (
          <> chưa có gì</>
        )}
      </Drawer>
    </>
  );
};

export default Cart;
