import { render } from "@testing-library/react";
import { Component } from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import { useState } from "react";
import productContext from './context/products'



class AppC extends Component {

    state = {
        products:[
            {id:1 , count:3 , productName:'laptop'},
            {id:2 , count:4 , productName:'phone'},
            {id:3 , count: 8, productName:'airpods'},
            {id:4 , count:9 , productName:'battery charger'}
        ]
    }

    render(){

        return(
            <>
    
            <productContext.Provider
            
                value={{
                    products: this.products ,
                    onIncrement:this.handleIncrement,
                    onDelete:this.handleDelete,
                    onReset:this.handleReset,
                    onDecrement:this.handleDecrement,
                }}
                >
                <Navbar/>
                <Products/>
            </productContext.Provider>
            </>
    
        )
    

    }

    handleDelete = (productId) =>{
        const newProducts = this.state.products.filter( p => p.id !== productId)
        this.setState({products : newProducts})
    }
  
    handleReset = () =>{
        const newProducts = this.state.products.map(p =>{
            p.count = 0 ;
            return p
        });
        this.setState({products:newProducts})
    }

    handleIncrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count +=1;
        this.setState({products : newProducts})
    }

    handleDecrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count -=1;
        this.setState({products : newProducts})
    }

}

export default AppC;