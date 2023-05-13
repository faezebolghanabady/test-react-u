import FCount from "./Fcount";
import { useState } from "react";

const FCounts = () => {

 const [product , productName ] = useState([
       {id:1 , count:3 , productName:'laptopp'},
       {id:2 , count:4 , productName:'phone'},
       {id:3 , count: 8, productName:'airpods'}
   ])

   return(
       <div>
           {product.map((p , index) => (
           <FCount onDelete={handleDelete} key={index} productName={p.productName} id={p.id} count={p.count} >
           </FCount>
          ))}
       </div>
   )

   function handleDelete (productId){
       const newProducts = product.filter(p => p.id !== productId);
       productName(newProducts)
   }
}
export default FCounts;