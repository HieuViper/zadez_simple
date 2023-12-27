import {
  Button,
  Form,
  InputNumber,
  Popconfirm,
  Select,
  Table,
  Typography,
} from "antd";
import { useState } from "react";

const TableProductOrder = ({
  selectProductList,
  productsOrder,
  setProductsOrder,
  productList,
}) => {
  const [editingElm, setEditingElm] = useState("");
  const isEditing = (record) => record.id === editingElm.id;

  const columns = [
    {
      title: "Name",
      dataIndex: ["products", "product_languages", 0, "name"],
      width: "25%",
      editable: true,
      render: (item, record) => {
        return !item ? (
          <Select
            showSearch
            placeholder="Select a product"
            optionFilterProp="children"
            onChange={(e) => {
              console.log(e);
              setProductsOrder((state) =>
                state.map((s) =>
                  s.id === record.id ? { ...s, productId: e } : s
                )
              );
            }}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            defaultValue={null}
            options={selectProductList}
          />
        ) : (
          <span>{item}</span>
        );
      },
    },
    {
      title: "Code",
      dataIndex: ["products", "product_code"],
      width: "20%",
      editable: false,
      render: (item, record) => {
        return !item ? (
          record.productId ? (
            <span>
              {
                productList.data.find((item) => item.id == record.productId)
                  .product_code
              }
            </span>
          ) : (
            ""
          )
        ) : (
          <span>{item}</span>
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: "10%",
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "30%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => handleSave(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={handleCancelEdit}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link
              disabled={editingElm}
              onClick={() => handleEditProduct(record)}
            >
              Edit
            </Typography.Link>
            &ensp;
            <Typography.Link
              disabled={editingElm}
              onClick={() => handleDeleteProduct(record.id)}
            >
              Delete
            </Typography.Link>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "amount" || col.dataIndex === "price"
            ? "number"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const handleEditProduct = (record) => {
    // productsOrderForm.setFieldsValue({
    //   ...record,
    // });
    setEditingElm(record);
  };
  const handleCancelEdit = () => {
    setEditingElm(null);
  };
  const handleDeleteProduct = (id) => {
    const newData = productsOrder.filter((item) => item.id !== id);
    setProductsOrder(newData);
  };
  const handleAddProduct = () => {
    const newData = {
      id: Math.round(Math.random() * 1000000),
      code: "",
      amount: 0,
      price: 0,
    };
    setProductsOrder([...productsOrder, newData]);
    setEditingElm(newData);
  };
  const handleSave = async (id) => {
    console.log("🚀 ~ file: page.js:90 ~ save ~ id:", id);
    try {
      const row = await productsOrderForm.validateFields();
      const newData = [...productsOrder];
      const index = newData.findIndex((item) => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setProductsOrder(newData);
        setEditingElm(null);
      } else {
        newData.push(row);
        setProductsOrder(newData);
        setEditingElm(null);
      }
      console.log(productsOrder);
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => handleAddProduct()}>
        Add Product
      </Button>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={productsOrder}
        columns={mergedColumns}
        rowKey="id"
      />
    </>
  );
};

export default TableProductOrder;

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : children;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
