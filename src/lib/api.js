import axios from "axios";

const DJANGO_DOMAIN = "http://127.0.0.1:8000/";

export async function getAllProducts() {
  const response = await axios.get(`${DJANGO_DOMAIN}api/products`);
  const data = response.data;

  if (response.statusText != "OK") {
    throw new Error(data.message || "Could not fetch Products.");
  }

  return data;
}

export async function getSingleProduct(productId) {
  const response = await axios.get(`${DJANGO_DOMAIN}api/products/${productId}`);
  const data = response.data;

  if (response.statusText != "OK") {
    throw new Error(data.message || "Could not fetch Products.");
  }
  return data;
}

export async function addToCart(id, qty) {
  const response = await axios.get(`${DJANGO_DOMAIN}api/products/${id}`);
  const data = response.data;
  data.qty = qty;

  if (response.statusText != "OK") {
    throw new Error(data.message || "Could not fetch Products.");
  }

  // localStorage.setItem("cartItems");

  return data;
}
