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
