import axios from "axios";

function ProductDelete({id}) {
  const handleDelete = () => {
    axios.delete(`/api/products/${id}`)
      .then(() => alert("삭제 성공"))
      .catch(err => console.error(err));
  };

  return <button onClick={handleDelete}>상품 삭제</button>;
};
export default ProductDelete;