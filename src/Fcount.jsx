import {useState} from 'react';
import { useContext , useEffect } from "react";
import productContext from './context/products'

const FCount = ({productName , count , id}) => {

    
    const procontext = useContext(productContext);

    useEffect(()=>{
        return()=>{
            console.log('product-unmount')
        }
    } , [])

    return(
        <div className=' m-5  border border-l-indigo-600'>
        <span className=" p-4 m-2">{productName }</span>
        <br/>
        <div className='ml-6 mt-3'>
        <span className=' p-1 px-3 border border-black'>{format(count)}</span>
        </div>
        <br/>
        <div className='p-2 '>
        <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold m-2 py-2 px-4 rounded' onClick={handleIncrement}> + </button>
        <br/>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold m-2 py-2 px-4 rounded' onClick={handleDecrement}> - </button>
        <br/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded' onClick={handleDelete}>delete</button>
        </div>
    </div>
    )

    

    function format (){
        if(count == 0){
        return 'zero';
        }else{
        return count;
        }
    }


    function handleIncrement (){
        procontext.onIncrement(id)
       }
    
    function handleDecrement (){
        procontext.onDecrement(id)
    }

    function handleDelete (){
        procontext.onDelete(id)

    }

}
export default FCount;