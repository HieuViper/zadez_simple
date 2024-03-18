import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

// upsert sequelize
export async function updateOrCreate(model, where, newItem) {
  // First try to find the record
  const foundItem = await model.findOne({ where });
  if (!foundItem) {
    // Item not found, create a new one
    const item = await model.create(newItem);
    return { item, created: true };
  }
  // Found an item, update it
  const item = await model.update(newItem, { where });
  return { item, created: false };
}

export function moneyToString(money) {
  return money?.toLocaleString("en-US").replace(/,/g, ".");
}

export function getCartStateFromLocalStorage() {
  if (typeof window !== "undefined") {
    const item = localStorage?.getItem("zadez-simple")
      ? JSON.parse(localStorage.getItem("zadez-simple"))?.state.cartState
      : null;

    return item;
  }
}

export function getUserStateFromLocalStorage() {
  if (typeof window !== "undefined") {
    const item = JSON.parse(localStorage.getItem("zadez-simple"))?.state
      .userState;
    return item;
  }
}

export function toSlug(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, "");

  return str;
}
