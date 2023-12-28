"use client";
import { fetcher } from "@/library/util";
import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Row } from "antd";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import TableProductOrder from "./_components/TableProductOrder";

const OrderForm = ({ params }) => {
  const isAddMode = params.id == 0 ? true : false;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [form] = Form.useForm();
  const [productsOrderForm] = Form.useForm();

  const [productsOrder, setProductsOrder] = useState([]);

  const onFinish = async (values) => {
    values.input_date = new Date(values.input_date.$d).toISOString();
    values.output_date = new Date(values.output_date.$d).toISOString();
    console.log(values);
    console.log(productsOrder);

    // if (isAddMode) {
    //   await fetch(`/api/orders`, {
    //     method: "POST",
    //     body: JSON.stringify(values),
    //   }).then((rs) => {
    //     if (rs.ok) {
    //       message.success("Add Success");
    //       router.push(
    //         `/admin/orders?page=${searchParams.get(
    //           "previousPage"
    //         )}&limit=${searchParams.get("previousLimit")}`
    //       );
    //     }
    //   });
    // } else {
    //   await fetch(`/api/orders/${params.id}`, {
    //     method: "PUT",
    //     body: JSON.stringify(values),
    //   }).then((rs) => {
    //     if (rs.ok) {
    //       message.success("Update Success");
    //       router.push(
    //         `/admin/orders?page=${searchParams.get(
    //           "previousPage"
    //         )}&limit=${searchParams.get("previousLimit")}`
    //       );
    //     }
    //   });
    // }
  };
  const onFinishFailed = () => {};

  const { data, error, isLoading } = useSWR(
    !isAddMode ? `/api/orders/${params.id}` : null,
    fetcher
  );
  console.log("🚀 ~ file: page.js:56 ~ orderList ~ data:", data);

  const { data: productList } = useSWR(
    !isAddMode ? `/api/products` : null,
    fetcher
  );
  const selectProductList = productList?.data?.map((item) => {
    return {
      value: item.id,
      label: item.product_languages[0].name,
    };
  });
  console.log("🚀 ~ file: page.js:235 ~ OrderForm ~ productList:", productList);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
      form.setFieldValue("input_date", dayjs(data.input_date));
      form.setFieldValue("output_date", dayjs(data.output_date));
      setProductsOrder(data.order_detail);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...123</div>;

  return (
    <Row type="flex" justify="center" align="middle">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        style={{
          width: "75%",
        }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Code"
          name="code"
          rules={[
            {
              required: true,
              message: "Please input order's code!",
            },
          ]}
        >
          <Input disabled={!isAddMode} />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
              message: "Please input order's status!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Input Date"
          name="input_date"
          rules={[
            {
              required: true,
              message: "Please input order's input date!",
            },
          ]}
        >
          <DatePicker format="YYYY-MM-DD HH:mm" showTime onChange={() => {}} />
        </Form.Item>
        <Form.Item
          label="Output Date"
          name="output_date"
          rules={[
            {
              required: true,
              message: "Please input order's output date!",
            },
          ]}
        >
          <DatePicker format="YYYY-MM-DD HH:mm" showTime onChange={() => {}} />
        </Form.Item>
        <Form.Item
          label="Customer"
          name={["customers", "name"]}
          rules={[
            {
              required: true,
              message: "Please input customer's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name={["customers", "phone"]}
          rules={[
            {
              required: true,
              message: "Please input customer's phone!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name={["customers", "email"]}
          rules={[
            {
              required: true,
              message: "Please input customer's email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <hr />

        <p className="text-2xl">Products</p>

        <Form form={productsOrderForm} component={false}>
          <TableProductOrder
            selectProductList={selectProductList}
            productsOrder={productsOrder}
            setProductsOrder={setProductsOrder}
            productList={productList}
          />
        </Form>

        <Form.Item className="flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            // loading={
            //   editProductMutation.isPending ||
            //   uploadSerialImageMutation.isPending
            // }
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default OrderForm;
