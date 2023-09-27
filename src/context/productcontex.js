import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
// import { useParams } from "react-router-dom";

const AppContext = createContext();

const API = "https://mocki.io/v1/fd7a6bb3-ef7d-4a5e-905b-29c02c0eedfc";
const API1 = "https://mocki.io/v1/7081298c-5dcd-4f64-af06-1e008567e87d"

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { id } = useParams();

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    // Split the URL string by slashes to get an array of parts
const parts = url.split('/');

// Get the last part before the last slash
const lastValue = parts[parts.length - 1];
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(API1);
      const singleProduct = await res.data;
      const singleProduct1 = singleProduct.find((product) => product.id === lastValue)
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct1 });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
