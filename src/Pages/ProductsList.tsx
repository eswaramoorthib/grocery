// import { useQuery } from "react-query";
// import fbBaseURL from "../utilities/axios";
// import { ProductsModel } from "../utilities/dropdownData";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Toast } from "primereact/toast";
// import { InputText } from "primereact/inputtext";
// const getAllProducts = () => fbBaseURL.get("/allProducts.json");
// const deleteProductData = (dbid: any) =>
//   fbBaseURL.delete(`/allProducts/${dbid}/.json`);
// const ProductsList = () => {
//   const navigate = useNavigate();
//   const toast = useRef<any>();
//   const [globalFilterValue, setGlobalFilterValue] = useState("");
//   const { data, isLoading, refetch } = useQuery(
//     ["allProducts"],
//     getAllProducts
//   );
//   let getAllProductsData: ProductsModel[] = [];
//   if (data?.data) {
//     for (const key in data.data) {
//       // data.data[key]?.productName.charAt(0).toUpperCase() +
//       //   data.data[key]?.productName.slice(1).toLowerCase()
//       getAllProductsData.push({ ...data.data[key], productDbId: key });
//     }
//   }
//   const renderHeader = () => {
//     return (
//       <div className="flex justify-content-between align-items-center">
//         <h5 className="m-0">Products</h5>
//         <span className="p-input-icon-left">
//           <i className="pi pi-search" />

//           <InputText
//             value={globalFilterValue}
//             onChange={(e: any) => {
//               setGlobalFilterValue(e.target.value);
//             }}
//             placeholder="Keyword Search"
//           />
//           {globalFilterValue.length >= 1 && (
//             <i
//               onClick={() => setGlobalFilterValue("")}
//               className="pi pi-times right clearAlignment"
//             />
//           )}
//         </span>
//       </div>
//     );
//   };
//   if (globalFilterValue) {
//     getAllProductsData =
//       getAllProductsData.length >= 1
//         ? getAllProductsData.filter(
//             (data: ProductsModel) =>
//               data.productName
//                 .toLowerCase()
//                 .includes(globalFilterValue.toLowerCase()) ||
//               data.productCategory.label.includes(
//                 globalFilterValue.toLowerCase()
//               )
//           )
//         : [];
//   }
//   const nameBodyTemplate = (rowData: ProductsModel) => (
//     <React.Fragment>
//       <img
//         className="table_image"
//         alt={rowData.productName}
//         src={rowData.productImage}
//         width={30}
//       />
//       <span className="image-text">{rowData.productName}</span>
//     </React.Fragment>
//   );
 
  

// };
// export default ProductsList;
