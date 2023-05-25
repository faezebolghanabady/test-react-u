import Product from "./Product";
import { Component, useState } from "react";
import { useContext } from "react";
import productContext from './context/products'

class Products extends Component{
    static contextType = productContext;

    render(){
return(
            <div className="p-4 border ">
                <button className="w-16 bg-black text-white p-2" onClick={this.handleReset} >Reset</button>
               {this.state.products.map((p , index) => (
                <Product onDecrement={this.handleDecrement} onIncrement={this.handleIncrement}
                 onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} >
                </Product>
               ))}
            </div>
        )
}

}
export default Products;