import SelectLocations from "@/components/SelectLocations";
import { useSWRData } from "@/library/api";
import store from "@/library/zustand/store";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CheckoutPageComp = () => {
  const [form] = Form.useForm();
  const { cartState, userState, resetCartState } = store();
  const router = useRouter();

  //locations
  const [cityId, setCityId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [wardId, setWardId] = useState("");
  const { data: dataLocation } = useSWRData("/api/location", {
    cityId,
    districtId,
  });

  const [isDoneCheckout, setIsDoneCheckout] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const onFinish = (values) => {
    setLoadingCheckout(true);
    const productsData = cartState.cartItems.map((item) => {
      return {
        productId: item.products.id,
        amount: item.amount,
        price: item.products.price,
      };
    });
    values.products = productsData;
    values.code = "test-code-order";
    values.status = "pending";
    values.customerId = customerData.data[0].id;
    values.input_date = new Date().toISOString();
    console.log("🚀 ~ file: page.js:8 ~ onFinish ~ values:", values);
    updateCustomer(customerData.data[0].id, values).then((res) => {
      createOrder(values).then((res) => {
        console.log(res);
        setIsDoneCheckout(true);
        setLoadingCheckout(false);
        message.success("Thanh toán thành công");
      });
    });
  };
  const {
    data: customerData,
    updateData: updateCustomer,
    isLoading,
    error,
  } = useSWRData("/api/customers", { keyword: userState?.phoneNumber });

  const { createData: createOrder, isLoading: isLoadingCreateOrder } =
    useSWRData("/api/orders");

  useEffect(() => {
    if (customerData) {
      //call api to get customer data
      form.setFieldsValue(customerData.data[0]);
      setCityId(customerData.data[0].cityId);
      setDistrictId(customerData.data[0].districtId);
    }
  }, [customerData]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return !userState.token ? (
    <div className="flex items-center justify-center h-[200px] text-red-500 text-xl">
      Bạn chưa đăng nhập
    </div>
  ) : cartState?.cartItems.length > 0 ? (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      className="bg-white p-3 rounded-xl"
    >
      <ol className="flex items-center justify-center p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg  sm:text-base  sm:p-4 sm:space-x-4 mb-4 mt-0">
        <li className="flex items-center ">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs bg-gray-400 text-white rounded-full shrink-0 ">
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
        <li className="flex items-center text-primary">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs bg-primary text-white rounded-full shrink-0 ">
            2
          </span>
          Checkout
        </li>
      </ol>

      <div className="grid lg:grid-cols-12 grid-cols-1 gap-24">
        <div className="lg:col-span-8 flex flex-col h-fit border border-slate-100 border-solid shadow-sm rounded-xl p-4">
          <Form.Item
            name="name"
            label="Tên người nhận"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên người nhận",
              },
              { min: 5, message: "Tên người dùng phải có ít nhất 5 ký tự" },
            ]}
          >
            <Input placeholder="Nhập tên người nhận" />
          </Form.Item>
          <SelectLocations
            {...{
              cityId,
              setCityId,
              districtId,
              setDistrictId,
              wardId,
              setWardId,
              dataLocation,
              form,
            }}
          />
          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ người nhận",
              },
            ]}
          >
            <Input placeholder="Nhập địa chỉ người nhận" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại người nhận",
              },
            ]}
            label="Số điện thoại"
          >
            <Input placeholder="Nhập số điện thoại người nhận" />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập e-mail người nhận",
              },
            ]}
          >
            <Input placeholder="Nhập email người nhận" />
          </Form.Item>
          <div className="flex justify-start">
            <Button icon={<ArrowLeftOutlined />} type="dashed">
              <Link href={"/gio-hang"} prefetch={false}>
                Quay lại giỏ hàng
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-4 h-fit p-4 border border-slate-100 border-solid rounded-xl shadow-sm flex flex-col gap-8 ">
          <div className="text-xl font-[500]">Đơn hàng của bạn</div>
          <div className="flex flex-col gap-8">
            {/* Card section */}
            <div className="flex flex-col gap-2">
              {cartState.cartItems.map((item) => (
                <Card key={item.products.id} data={item} />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Input disabled={true} placeholder="Discount code" />
              <Button disabled>Apply</Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span>Tổng giá sản phẩm</span>
                <span>{cartState.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Giảm giá</span>
                <span>-0.000</span>
              </div>
              {/* <div className="flex justify-between text-sm">
                <span>Phí giao hàng</span>
                <span>Free</span>
              </div> */}
              <Divider style={{ marginTop: 0, marginBottom: 0 }} />
              <div className="flex justify-between font-[500] text-xl">
                <span>Tổng Hoá Đơn</span>
                <span>{cartState.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {isDoneCheckout ? (
            <Button
              type="default"
              className="w-full"
              onClick={() => {
                resetCartState();
                router.push("/");
              }}
            >
              Tiếp tục mua hàng
            </Button>
          ) : (
            <Button htmlType="submit" type="primary" loading={loadingCheckout}>
              Xác nhận & Hoàn thành đơn hàng
            </Button>
          )}
        </div>
      </div>
    </Form>
  ) : (
    <>Chưa có sản phẩm trong giỏ hàng</>
  );
};

export default CheckoutPageComp;

const Card = ({ data }) => {
  return (
    <>
      <div className="flex text-sm items-center gap-3">
        <Image
          src={data.products.main_image || "/no-image.jpg"}
          width={100}
          height={100}
          alt=""
          className="rounded-lg object-contain"
        />
        <div className="flex flex-col gap-2 text-xs w-full">
          <span className="text-base">{data.products.name}</span>
          {/* <span>Black</span> */}
          <div className="">
            {data.products.color && (
              <Tag
                color={
                  data.products.color == "white" ? "" : data.products.color
                }
              >
                {data.products.color}
              </Tag>
            )}
          </div>
          <span>x{data.amount}</span>
          <span className="text-right">
            {data.products.price.toLocaleString()}
          </span>
        </div>
      </div>
      <Divider style={{ marginTop: 1, marginBottom: 1 }} />
    </>
  );
};
