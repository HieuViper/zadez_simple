import { message } from "antd";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export const useSWRData = (endpoint, params = {}) => {
  const { id, ...otherParams } = params; // Extract 'id' from params
  const queryString =
    Object.keys(otherParams).length > 0
      ? new URLSearchParams(otherParams).toString()
      : "";
  const key = id
    ? `${endpoint}/${id}?${queryString}`
    : `${endpoint}${queryString && `?${queryString}`}`;
  const { data, isLoading, error, mutate } = useSWR(key, fetcher);

  const createData = async (newData) => {
    // Perform POST request to create data
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    // Update the local data on success
    if (res.ok) {
      message.success("Add Success");
      mutate();
      return { status: 200 };
    }
  };

  const updateData = async (id, updatedData) => {
    const res = await fetch(`${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      message.success("Update Success");
      mutate();
      return { status: 200 };
    }
  };

  const deleteData = async (id) => {
    const res = await fetch(`${endpoint}/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      message.success("Delete Success");
      mutate();
      return { status: 200 };
    }
  };
  const bulkDeleteData = async (ids) => {
    const res = await fetch(`${endpoint}`, {
      method: "DELETE",
      body: JSON.stringify({ ids }),
    });

    if (res.ok) {
      message.success("Delete Success");
      mutate();
      return { status: 200 };
    }
  };

  return {
    data,
    isLoading,
    mutate,
    createData,
    updateData,
    deleteData,
    bulkDeleteData,
  };
};

export const useSWRUpload = (endpoint, params = {}) => {
  const uploadFormData = async (formData) => {
    try {
      const res = await fetch(`${endpoint}`, {
        method: "POST",
        // headers: {
        //   'content-type': 'multipart/form-data',
        //   accept: 'application/json',
        // },
        body: formData,
      });
      if (res.ok) {
        // message.success("Upload Success");
      }
      const result = await res.json();
      return result;
    } catch {
      throw new Error("File upload failed");
    }
  };
  return {
    uploadFormData,
  };
};
