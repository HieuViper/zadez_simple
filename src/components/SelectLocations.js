import { Form, Select } from "antd";

const SelectLocations = ({
  dataLocation: data,
  form,
  cityId,
  setCityId,
  districtId,
  setDistrictId,
  wardId,
  setWardId,
}) => {
  const optionCity = data?.cities.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  const optionDistrict = data?.districts
    ? data.districts.map((item) => {
        return {
          value: item.id,
          label: item.name,
        };
      })
    : [];
  const optionWard = data?.wards
    ? data.wards.map((item) => {
        return {
          value: item.id,
          label: item.name,
        };
      })
    : [];

  return (
    <>
      <Form.Item
        label="Thành phố"
        name="cityId"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn thành phố!",
          },
        ]}
      >
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Choose a city"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          value={cityId}
          onChange={(value) => {
            setCityId(value);
            form.setFieldsValue({ districtId: "", wardId: "" });
          }}
          options={optionCity}
        />
      </Form.Item>

      <Form.Item
        label="Quận"
        name="districtId"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn quận!",
          },
        ]}
      >
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Choose a district"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          value={districtId}
          options={optionDistrict}
          onChange={(value) => {
            setDistrictId(value);
            form.setFieldsValue({ wardId: "" });
          }}
          disabled={!cityId}
        />
      </Form.Item>

      <Form.Item
        label="Phường / Xã"
        name="wardId"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn phường, xã!",
          },
        ]}
      >
        <Select
          showSearch
          style={{
            width: 200,
          }}
          value={wardId}
          placeholder="Choose a ward"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={optionWard}
          onChange={(value) => setWardId(value)}
          disabled={!districtId}
        />
      </Form.Item>
    </>
  );
};

export default SelectLocations;
