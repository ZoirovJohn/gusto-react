// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProductService from "../../services/ProductService";


// const Products = () => {
//   const dispatch = useDispatch();
//   const filterState = useSelector((state) => state.filter);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     ProductService.getProducts(filterState)
//       .then((data) => setProducts(data))
//       .catch((err) => console.log(err));
//   }, [filterState]);

//   return (
//     <>
//       <FilterMenu
//         selectedOrder={filterState.order}
//         selectedCollection={filterState.productCollection}
//         onOrderChange={(val) => dispatch(setOrder(val))}
//         onCollectionChange={(val) => dispatch(setCollection(val))}
//       />

//       {/* List of Products */}
//       <div className="product-list">
//         {products.map((p) => (
//           <div key={p._id}>{p.productName}</div>
//         ))}
//       </div>

//       <PaginationBar
//         page={filterState.page}
//         onChangePage={(val) => dispatch(setPage(val))}
//       />
//     </>
//   );
// };

// export default Products;
