import React, {ReactElement} from "react";





// interface IProductCategoryRowProps {
//   category: string;
// }

// export function ProductCategoryRow(props: IProductCategoryRowProps) {
//   return (
//     <tr>
//       <th colSpan = {2}>
//         {props.category}
//       </th>
//     </tr>
//   )
// }

// interface IProductRowProps {
//   product: IProduct;
// }
// export function ProductRow (props: IProductRowProps) {
//   const {product} = props;

//   const productNameColor: string = product.stocked ? 'yellow' : 'red';
//   const name = (
//     <span style={{ color: productNameColor }}>
//       {product.name}
//     </span>
//   );

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   );
// }

// interface IProductTableProps {
//   products: TProducts;
// }
// export function ProductTable( props: IProductTableProps) {

//   const rows: Array<ReactElement> = [];
//   let lastCategory: string | null = null;
//   const {products} = props;

//   products.forEach((product) => {
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category} 
//         />
//       );
//     }
//     rows.push (
//       <ProductRow
//         product={product}
//         key={product.name} />
//     );
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// interface IProduct {
//   category: string;
//   price: string;
//   stocked: boolean;
//   name: string;
//   sername?: number;
// }
// type TProducts = Array<IProduct>;

// export const PRODUCTS: TProducts = [
//   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
//   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
//   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
//   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
// ];

