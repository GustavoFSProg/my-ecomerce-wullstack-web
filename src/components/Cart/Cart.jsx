import { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [product, setProduct] = useState({});

  const ID = localStorage.getItem("Id-Product");

  async function getOneProduct() {
    const { data } = await api.get(`/get-one/${ID}`);

    setProduct(data);
  }

  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <>
      <div>
        <p>{product.name}</p>
        <img src={product.image} width="100" alt="produto" />
      </div>
    </>
  );
}

export default Cart;
