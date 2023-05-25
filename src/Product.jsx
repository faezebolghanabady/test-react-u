import {useState} from 'react';
import { useContext } from "react";
import productContext from './context/products'
import { Component } from 'react';

class Product extends Component {

static contextType = productContext;

    render(){

        const {productName} = this.props;
        return(
            <div className=' m-5  border border-l-indigo-600'>
            <span className=" p-4 m-2">{productName }</span>
            <br/>
            <div className='ml-6 mt-3'>
            <span className=' p-1 px-3 border border-black'>{format(count)}</span>
            </div>
            <br/>
            <div className='p-2 '>
            <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold m-2 py-2 px-4 rounded' onClick={this.handleIncrement}> + </button>
            <br/>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold m-2 py-2 px-4 rounded' onClick={this.handleDecrement}> - </button>
            <br/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded' onClick={this.handleDelete}>delete</button>
            </div>
        </div>
        )
    

    }

    format = () => {
        if(this.count == 0){
        return 'zero';
        }else{
        return this.count;
        }
    }


    handleIncrement = () => {
        procontext.onIncrement(id)
       }
    
    handleDecrement = () => {
        procontext.onDecrement(id)
    }

    handleDelete = () => {
        procontext.onDelete(id)

    }

}
export default Product;