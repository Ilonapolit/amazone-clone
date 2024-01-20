import React from 'react';
import { useLoaderData } from 'react-router-dom';

interface YourDataType {
  data: {

    products: any[];
  };
}

const Products: React.FC = () => {

  const data = useLoaderData() as YourDataType;

 
  if (!data || !data.data) {
    return <div>Error: Data is not available</div>;
  }


  const productsData = data.data;

  return (
    <div>
      Products
    
    </div>
  );
};

export default Products;

