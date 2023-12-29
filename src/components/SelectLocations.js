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
  console.log("🚀 ~ file: SelectLocations.js:12 ~ data:", data);
  console.log(cityId, districtId, wardId);
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
        label="City"
        name="cityId"
        rules={[
          {
            required: true,
            message: "Please input customer's city!",
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
        label="District"
        name="districtId"
        rules={[
          {
            required: true,
            message: "Please input customer's district!",
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
        label="Ward"
        name="wardId"
        rules={[
          {
            required: true,
            message: "Please input customer's ward!",
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
