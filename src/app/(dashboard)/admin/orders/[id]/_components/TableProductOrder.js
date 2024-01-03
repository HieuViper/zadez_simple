import { fetcher } from "@/library/util";
import {
  Button,
  InputNumber,
  Popconfirm,
  Select,
  Table,
  Typography,
} from "antd";
import { useState } from "react";
import useSWR from "swr";

const TableProductOrder = ({ productsOrder, setProductsOrder }) => {
  const [editingElm, setEditingElm] = useState(null);
  const isEditing = (record) => record.id === editingElm?.id;
  const [searchProduct, setSearchProduct] = useState("");
  const [productList, setProductList] = useState([]);
  useSWR(
    searchProduct ? `/api/products?keyword=${searchProduct}` : null,
    fetcher,
    {
      onSuccess: (data) => {
        const modifiedData = data.data.map((item) => {
          return {
            label: `${item.name} `,
            code: item.product_code,
            value: item.id,
          };
        });
        setProductList(modifiedData);
      },
    }
  );

  const columns = [
    {
      title: "Name",
      dataIndex: ["products", "name"],
      width: "25%",
      editable: true,
      render: (item, record) => {
        return isEditing(record) ? (
          <Select
            showSearch
            placeholder="Search by code or name"
            optionFilterProp="children"
            onSearch={(value) => {
              setSearchProduct(value);
            }}
            className="w-[200px]"
            defaultValue={{
              label: `${record?.products?.name} `,
              value: record?.products?.id,
            }}
            onChange={(value, option) => {
              const updatedData = productsOrder.map((item) =>
                item.id === record.id
                  ? {
                      ...item,
                      productId: value,
                      products: {
                        ...item.products,
                        name: option.label,
                        product_code: option.code,
                      },
                    }
                  : item
              );
              setProductsOrder(updatedData);
              setSearchProduct("");
            }}
            filterOption={false}
            options={productList}
          />
        ) : (
          <span>{record?.products?.name || item}</span>
        );
      },
    },
    {
      title: "Code",
      dataIndex: ["products", "product_code"],
      width: "20%",
      editable: false,
      render: (item, record) => {
        return <span>{item}</span>;
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: "10%",
      editable: true,
      render: (item, record) => {
        return isEditing(record) ? (
          <InputNumber
            value={item}
            onChange={(value) => {
              const updatedData = productsOrder.map((item) =>
                item.id === record.id
                  ? {
                      ...item,
                      amount: value,
                    }
                  : item
              );
              setProductsOrder(updatedData);
            }}
          />
        ) : (
          <span>{item}</span>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "30%",
      editable: true,
      render: (item, record) => {
        return isEditing(record) ? (
          <InputNumber
            value={item}
            onChange={(value) => {
              const updatedData = productsOrder.map((item) =>
                item.id === record.id
                  ? {
                      ...item,
                      price: value,
                    }
                  : item
              );
              setProductsOrder(updatedData);
            }}
          />
        ) : (
          <span>{item}</span>
        );
      },
    },
    {
      title: "Action",
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
            <Popconfirm
              title="Sure to cancel?"
              onConfirm={() => setEditingElm(null)}
            >
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link
              disabled={editingElm}
              onClick={() => {
                setEditingElm(record);
              }}
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
      onCell: (record) => {
        return {
          record,
          dataindex: col.dataIndex,
          title: col.title,
          editable: isEditing(record).toString(),
        };
      },
    };
  });

  const handleDeleteProduct = (id) => {
    const newData = productsOrder.filter((item) => item.id !== id);
    setProductsOrder(newData);
  };
  const handleAddProduct = () => {
    setProductsOrder([
      ...productsOrder,
      {
        id: Math.floor(Math.random() * (100000 - 1)),
        amount: 0,
        price: 0,
        productId: 0,
      },
    ]);
    // setEditingElm(null);
  };
  const handleSave = async (id) => {
    try {
      const newData = [...productsOrder];
      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
        });
        setProductsOrder(newData);
        setEditingElm(null);
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => handleAddProduct()}
        className="mb-3"
      >
        Add Product
      </Button>
      <Table
        bordered
        dataSource={productsOrder}
        columns={mergedColumns}
        rowKey="id"
      />
    </>
  );
};

export default TableProductOrder;

// const EditableCell = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === "number" ? <InputNumber /> : children;
//   return <td {...restProps}>{editing ? <>{inputNode}</> : children}</td>;
// };
