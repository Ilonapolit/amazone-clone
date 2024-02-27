import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navigation() {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   async function getCategories() {
//     try {
//       const resp = await axios.get("http://localhost:3000/product-category");
//       setCategories(resp.data);
//       console.log('fhfhfhfhfh')
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   }

//   useEffect(() => {
//     getCategories();
//   }, []);

//   return (
//     <div>
//       {categories.map((category:any) => (
//         <div key={category.id} onClick={() => navigate(`/${category.name}`)}>
//           {category.name}
//         </div>
//       ))}
//     </div>
//   );
}
