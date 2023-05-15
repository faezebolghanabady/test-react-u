import FCount from "./Fcount";
import { useState } from "react";
import { useContext } from "react";
import productContext from './context/products'

const FCounts = (props) => {
    const procontext = useContext(productContext);

   return(
       <div className="p-4 border ">
        <button className="w-16 bg-black text-white p-2" onClick={procontext.onReset}> reset</button>
           {procontext.products.map((p , index) => (
           <FCount key={index}
            productName={p.productName}
            id={p.id}
            count={p.count}
            >
           </FCount>
          ))}
       </div>
   )

}
export default FCounts;