import React from "react";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { useNavigate } from "react-router-dom";
import SyncLoaderr from "../Components/SyncLoader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/products`);

    const data = await res.json();

    console.log(data);

    if (data && data.products) {
      setLoading(false);
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="">
          {products.length > 0 && (
            <div className="products flex flex-wrap justify-evenly">
              {products.slice(page * 10 - 10, page * 10).map((item, index) => (
                <div
                  key={index}
                  class="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-[300px] w-56 hover:shadow-xl bg-white m-8"
                >
                  <div class="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg">
                    <img
                      className="h-full w-full object-cover rounded-md"
                      src={item.thumbnail}
                      alt=""
                    />
                  </div>

                  <div class="px-5 pt-2 flex flex-col">
                    <div className="flex gap-2 items-center">
                      <h2 class="font-semibold text-lg">
                        ${item.discountPercentage}{" "}
                      </h2>{" "}
                      <h2 className="line-through">${item.price}</h2>
                    </div>
                    <div className="flex gap-2">
                      {" "}
                      <Rating
                        name="read-only"
                        value={item.rating}
                        precision={0.1}
                        readOnly
                      />{" "}
                      <span className="bg-slate-200 rounded-lg px-1">
                        {item.rating}
                      </span>
                    </div>
                    <h2 className="text-gray-600">
                      {item.title.slice(0, 20)}...
                    </h2>
                    <button
                      class="bg-blue-500 cursor-pointer text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-blue-700"
                      type="button"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      <ShoppingCartOutlinedIcon />
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {products.length > 0 && (
          <div className="text-right">
            <span
              onClick={() => selectPageHandler(page - 1)}
              className="p-2 cursor-pointer bg-slate-200"
            >
              <KeyboardDoubleArrowLeftOutlinedIcon />
            </span>

            {[...Array(products.length / 10)].map((_, i) => {
              return (
                <span
                  key={i}
                  className="bg-slate-300 mx-1 p-2 cursor-pointer"
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}

            <span
              onClick={() => selectPageHandler(page + 1)}
              className="p-2 cursor-pointer bg-slate-100"
            >
              <KeyboardDoubleArrowRightOutlinedIcon />
            </span>
          </div>
        )}
      </div>
      {loading && <SyncLoaderr />}
    </>
  );
};

export default Products;
