const TableRow = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.model}</td>
      <td>{product.brand}</td>
      <td>{product.stock}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.total}</td>
      <td>
        <button className="btn btn-sm btn-primary">+</button>
        <button className="btn btn-sm btn-danger">-</button>
      </td>
    </tr>
  );
};
export default TableRow;