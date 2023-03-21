import { IProduct } from "./interfaces";

type getProductRes = {
    products: IProduct[];
}


export const getProducts = async () => {
    const response = await fetch("http://localhost:8080/products");
    const json = (await response.json()) as getProductRes;
    console.log(json)
    return json.products;
  };