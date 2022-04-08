export interface DropDownModel {
  id: number;
  label: string;
}
export interface ProductsModel {
  productName: string;
  productCost: number;
  productCategory: { id: 1; label: "" };
  productImage: string;
  productDbId?: string;
}
const dropdownData: DropDownModel[] = [
  { id: 1, label: "Fruits and Vegetables" },
  { id: 2, label: "Dairy, Bread and Eggs" },
  { id: 3, label: "Rice, Dal and Oils" },
];

export default dropdownData;
