import FCount from "./Fcount";
import { useState } from "react";

const FCounts = ({onIncrement , onDelete , onReset , onDecrement , products}) => {



   return(
       <div>
           {products.map((p , index) => (
           <FCount onDelete={onDelete} key={index}
            productName={p.productName}
            id={p.id}
            count={p.count}
            onDecrement={onDecrement}
            onReset={onReset}
            onIncrement={onIncrement} >
           </FCount>
          ))}
       </div>
   )

}
export default FCounts;