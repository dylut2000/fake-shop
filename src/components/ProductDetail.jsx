import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );

      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId) fetchProductDetail();
  }, [productId]);

  return <div>product detail</div>;
};

export default ProductDetail;
