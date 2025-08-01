import { useState } from 'react';
import Products from "../products/index";
import TableRow from "../productView/index";
const App = () => {
    const [products, setProducts] = useState(
            Products.map((item) => ({
                ...item,
                quantity: 0,
                total: 0,
            }))
    )
    return (
        <div className='container'>
            <h1>Product Lists</h1>
            <table className="table">
                <thead>
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
                    {
                        products.map((product) => (
                            <TableRow key={product.id} product={product} />
                        ))

                    }
                </tbody>
            </table>
        </div>
    )
}
export default App;