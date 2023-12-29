"use client";
import { useSWRData } from "@/library/api";
import { Select } from "antd";
import { useState } from "react";

const TestPage = () => {
  const [cityId, setCityId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [wardId, setWardId] = useState("");
  console.log(cityId, districtId, wardId);

  const { data } = useSWRData("/api/location", { cityId, districtId });

  const optionCity = data?.cities.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  const optionDistrict = cityId
    ? data?.districts.map((item) => {
        return {
          value: item.id,
          label: item.name,
        };
      })
    : [];
  const optionWard = districtId
    ? data?.wards.map((item) => {
        return {
          value: item.id,
          label: item.name,
        };
      })
    : [];

  return (
    <>
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Choose a city"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        value={cityId}
        onChange={(value) => {
          setCityId(value);
          setDistrictId("");
          setWardId("");
        }}
        options={optionCity}
      />

      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Choose a district"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        value={districtId}
        defaultValue="1"
        options={optionDistrict}
        onChange={(value) => {
          setDistrictId(value);
          setWardId("");
        }}
        disabled={!cityId}
      />

      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Choose a ward"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={optionWard}
        onChange={(value) => setWardId(value)}
        disabled={!districtId}
      />
    </>
  );
};

export default TestPage;
