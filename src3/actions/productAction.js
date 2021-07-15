import axios from "axios";

export const getProductsAction = () => async (dispatch) => {
  const result = await axios.get("https://fakestoreapi.com/products");
  console.log(result.data);
  dispatch({
    type: "GET_PRODUCTS",
    payload: result.data,
  });
};

export const getProductAction = (id) => async (dispatch) => {
  const result = await axios.get("https://fakestoreapi.com/products/" + id);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "GET_PRODUCT",
    payload: result.data,
  });
};

export const addProductAction = (product) => async (dispatch) => {
  const result = await axios.post("https://fakestoreapi.com/products", product);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "ADD_PRODUCT",
    payload: result.data,
  });
};

export const deleteProductAction = (id) => async (dispatch) => {
  const result = await axios.delete(`https://fakestoreapi.com/products/${id}`);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "DELETE_PRODUCT",
    payload: result.data,
  });
};

export const updateProductAction = (product) => async (dispatch) => {
  const result = await axios.put("https://fakestoreapi.com/products", product);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "UPDATE_PRODUCT",
    payload: result.data,
  });
};
