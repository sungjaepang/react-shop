/* 260603 front프로젝트 시작 및 api/product.js 파일 생성 */

//  - .

import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};