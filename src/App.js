import { render } from "@testing-library/react";
import { Component } from "react";
import FCounts from "./Fcounts";
import Navbar from "./Navbar";
import { useState } from "react";
import productContext from './context/products'



const App = () =>{

    const [products , setproducts ] = useState([
        {id:1 , count:3 , productName:'laptop'},
        {id:2 , count:4 , productName:'phone'},
        {id:3 , count: 8, productName:'airpods'},
        {id:4 , count:9 , productName:'battery charger'}
    ])

    return(
        <>

        <productContext.Provider
        
            value={{
                products:products ,
                onIncrement:handleIncrement,
                onDelete:handleDelete,
                onReset:handleReset,
                onDecrement:handleDecrement,
            }}
            >
            <Navbar/>
            <FCounts/>
        </productContext.Provider>
        </>

    )


    
     function handleDelete(productId){
        const newProducts = products.filter( p => p.id !== productId)
        setproducts(newProducts)
    }

    function handleReset(){
        const newProducts = products.map(p =>{
            p.count = 0 ;
            return p
        });
        setproducts(newProducts)
    }

    function handleIncrement (productId) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count +=1;
        setproducts(newProducts)
    }

    function handleDecrement (productId) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count -=1;
        setproducts(newProducts)
    }
  

}

export default App;