import { render } from "@testing-library/react";
import { Component } from "react";
import FCounts from "./Fcounts";
import Navbar from "./Navbar";
import { useState } from "react";



const App = () =>{

    const [products , setproducts ] = useState([
        {id:1 , count:3 , productName:'laptopp'},
        {id:2 , count:4 , productName:'phone'},
        {id:3 , count: 8, productName:'airpods'}
    ])

    return(
        <>
        <Navbar products={products}/>
        <FCounts products={products}
         onIncrement={handleIncrement}
         onDelete={handleDelete}
         onReset={handleReset}
         oDecrement={handleDecrement}

          />
        </>

    )


    
     function handleDelete(productId){
        const newProducts = this.state.products.filter( p => p.id !== productId)
        this.setState({products : newProducts})
    }

    function handleReset(){
        const newProducts = this.state.products.map(p =>{
            p.count = 0 ;
            return p
        });
        this.setState({products:newProducts})
    }

    function handleIncrement (productId) {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count +=1;
        this.setState({products : newProducts})
    }

    function handleDecrement (productId) {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count -=1;
        this.setState({products : newProducts})
    }
  

}

export default App;