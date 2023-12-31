"use client";
import { useSWRData } from "@/library/api";
import { fetcher } from "@/library/util";
import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Divider, Form, Input, Row, Select } from "antd";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import TableProductOrder from "./_components/TableProductOrder";
const { Option } = Select;

const OrderForm = ({ params }) => {
  const isAddMode = params.id == 0 ? true : false;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [form] = Form.useForm();

  const [productsOrder, setProductsOrder] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState("");

  const onFinish = async (values) => {
    values.input_date = new Date(values.input_date.$d).toISOString();
    values.output_date = new Date(values.output_date.$d).toISOString();
    console.log(productsOrder);
    values.products = productsOrder;
    console.log(values);

    if (isAddMode) {
      createData(values).then((res) => {
        if (res.status === 200) {
          router.push(
            `/admin/orders?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    } else {
      updateData(params.id, values).then((res) => {
        if (res.status == 200) {
          router.push(
            `/admin/orders?page=${searchParams.get(
              "previousPage"
            )}&limit=${searchParams.get("previousLimit")}`
          );
        }
      });
    }
  };
  const onFinishFailed = () => {};

  const { data, error, isLoading, createData, updateData } = useSWRData(
    "/api/orders",
    isAddMode ? {} : { id: params.id }
  );
  console.log("🚀 ~ file: page.js:56 ~ orderList ~ data:", data);

  const [customerList, setCustomerList] = useState([]);
  useSWR(
    searchCustomer ? `/api/customers?keyword=${searchCustomer}` : null,
    fetcher,
    {
      onSuccess: (data) => {
        const modifiedData = data.data.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        });
        setCustomerList(modifiedData);
      },
    }
  );

  useEffect(() => {
    if (!isAddMode && data) {
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
        initialValues={{
          customerId: isAddMode
            ? ""
            : {
                value: data.customerId,
                label: data.customers.name,
              },
        }}
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

        <Form.Item name="customerId" label="Customer">
          <Select
            showSearch
            placeholder="Search by phone or email"
            optionFilterProp="children"
            onSearch={(value) => {
              setSearchCustomer(value);
            }}
            filterOption={false}
            options={customerList}
          />
        </Form.Item>

        <Divider />

        <p className="text-2xl">Products</p>

        <TableProductOrder
          productsOrder={productsOrder}
          setProductsOrder={setProductsOrder}
        />

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
