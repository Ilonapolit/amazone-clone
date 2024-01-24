import React from 'react';
import { useLoaderData } from 'react-router-dom';

interface Product {
  image: string;
 
}

interface YourDataType {
  data: {
    products: Product[];
  };
}

const Products: React.FC = () => {
  const data = useLoaderData() as YourDataType;

  if (!data) {
    return <div>Error: No data received from useLoaderData()</div>;
  }

  if (!data.data) {
    return <div>Error: 'data' property is missing in the received data</div>;
  }

  if (!data.data.products) {
    return <div>Error: 'products' property is missing in the received data</div>;
  }

  const productsData: Product[] = data.data.products;

  return (
    <div>
      {productsData.map((item, index) => (
        <div key={index}>
          <img className='w-52 h-64 object-contain' src={item.image} alt='ProductImg' />
        </div>
      ))}
    </div>
  );
};

export default Products;

