// import { useState } from 'react';
// const Products = [
//     {
//         id: 1001,
//         model: "redmiNote10",
//         brand: "Xioami",
//         price: 20000,
//         stock: 5,
//     },
//     {
//         id: 1002,
//         model: "redmiNote11",
//         brand: "Xioami",
//         price: 21000,
//         stock: 15,
//     },
//     {
//         id: 1003,
//         model: "redmiNote12",
//         brand: "Xioami",
//         price: 22000,
//         stock: 25,
//     },
//     {
//         id: 1004,
//         model: "redmiNote13",
//         brand: "Xioami",
//         price: 23000,
//         stock: 35,
//     }
// ]
// const TableRow = ({ product, increment, decrement}) => {
//     const {id, model, brand, stock, price, total, quantity } = product;
//   return (
//     <tr>
//       <td>{id}</td>
//       <td>{model}</td>
//       <td>{brand}</td>
//       <td>{stock}</td>
//       <td>{price}</td>
//       <td>{quantity}</td>
//       <td>{total}</td>
//       <td>
//         <button className="btn btn-sm btn-primary" disabled={stock==0} onClick = {()=> increment(id)} >+</button>
//         <button className="btn btn-sm btn-danger" disabled={quantity==0} onClick = {()=> decrement(id)}>-</button>
//       </td>
//     </tr>
//   );
// };

// const App = () => {
//     const [products, setProducts] = useState(Products.map((item) => ({
//                 ...item,
//                 quantity: 0,
//                 total: 0,
//             }))
//         )

//         const Increment = (id) =>{
//             setProducts(
//                 products.map((product)=>{
//                     if (id === product.id && product.stock > 0 ) {
//                         product.quantity++;
//                         product.stock--;
//                         product.total = product.quantity * product.price;
//                     }
//                     return product;
//                 })
//             )
//         }
//         const Decrement = (id) =>{
//             setProducts(
//                 products.map((product)=>{
//                     if (id === product.id && product.quantity > 0 ) {
//                         product.quantity--;
//                         product.stock++;
//                         product.total = product.quantity * product.price;
//                     }
//                     return product;
//                 })
//             )
//         }
//         const total = products.reduce((acc, cur)=> acc + cur.total, 0)
//   return (
//     <div className='container'>
//             <h1>Product Lists</h1>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Model</th>
//                         <th>Brand</th>
//                         <th>Stock</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Total</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         products.map((product) => (
//                             <TableRow key={product.id} product={product} increment={Increment} decrement={Decrement}/>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         <div className="container">
//             {total > 0 && <p>Total : {total}</p>}
//         </div>
//         </div>
//   )
// }

// export default App
import { useState } from 'react';

const Products = [
  { id: 1001, model: "redmiNote10", brand: "Xioami", price: 20000, stock: 5 },
  { id: 1002, model: "redmiNote11", brand: "Xioami", price: 21000, stock: 15 },
  { id: 1003, model: "redmiNote12", brand: "Xioami", price: 22000, stock: 25 },
  { id: 1004, model: "redmiNote13", brand: "Xioami", price: 23000, stock: 35 }
];

const TableRow = ({ product, increment, decrement, reset }) => {
  const { id, model, brand, stock, price, total, quantity } = product;

  return (
    <tr>
      <td>{id}</td>
      <td>{model}</td>
      <td>{brand}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button 
          className="btn btn-sm btn-primary me-1" 
          disabled={stock === 0} 
          onClick={() => increment(id)}
        >
          +
        </button>

        <button 
          className="btn btn-sm btn-danger me-1" 
          disabled={quantity === 0} 
          onClick={() => decrement(id)}
        >
          -
        </button>

        <button 
          className="btn btn-sm btn-warning" 
          disabled={quantity === 0} 
          onClick={() => reset(id)}
        >
          Reset
        </button>
      </td>
    </tr>
  );
};

const App = () => {
  const [products, setProducts] = useState(
    Products.map((item) => ({
      ...item,
      quantity: 0,
      total: 0,
    }))
  );

  const Increment = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id && product.stock > 0) {
          return {
            ...product,
            quantity: product.quantity + 1,
            stock: product.stock - 1,
            total: (product.quantity + 1) * product.price,
          };
        }
        return product;
      })
    );
  };

  const Decrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1,
            stock: product.stock + 1,
            total: (product.quantity - 1) * product.price,
          };
        }
        return product;
      })
    );
  };

  // ✅ New Reset Function
  const Reset = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id && product.quantity > 0) {
          return {
            ...product,
            stock: product.stock + product.quantity, // restore stock
            quantity: 0,
            total: 0,
          };
        }
        return product;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div className="container mt-4">
      <h1>Product Lists</h1>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow 
              key={product.id} 
              product={product} 
              increment={Increment} 
              decrement={Decrement} 
              reset={Reset}   // ✅ Passing reset function
            />
          ))}
        </tbody>
      </table>

      {total > 0 && <p className="mt-3 fw-bold">Total: {total}</p>}
    </div>
  );
};

export default App;
