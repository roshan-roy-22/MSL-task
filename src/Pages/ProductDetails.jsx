import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SyncLoaderr from "../Components/SyncLoader";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    console.log(data);
    if (data) {
        setLoading(false);
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(product);
  console.log(product?.title);
  console.log(product?.rating);

  console.log(id);
  return (
    <>
      <div className="grid grid-cols-2 my-7">
        <div className="ps-20">
          <img src={product?.thumbnail} alt="" />
        </div>
        <div className="p-7 ">
          <h1 className="text-5xl mb-3">
            {product?.title}({product?.category})
          </h1>
          <div className="flex gap-2 mb-3 text-xl items-center">
            <Rating name="read-only" value={4} precision={0.1} readOnly />
            <span>{product?.rating}</span>
          </div>
          <h1 className="text-2xl mb-3">Description: {product?.description}</h1>
          <div className="flex gap-2">
            <h1 className="text-xl mb-3 font-semibold">
              Price :${product?.discountPercentage}
            </h1>
            <h1 className="text-lg line-through mb-3">{product?.price}</h1>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-white">
            <ShoppingBagOutlinedIcon />
            Buy Now
          </button>
        </div>
      </div>
      {loading && <SyncLoaderr />}
    </>
  );
};

export default ProductDetails;
