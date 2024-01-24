

import axios from 'axios';

export async function productsData() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
}
