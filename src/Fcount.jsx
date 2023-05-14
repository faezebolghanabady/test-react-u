import {useState} from 'react';

const FCount = ({productName , count:propCount , id , onDelete}) => {

    const [count , setcount] = useState(propCount);

    return(
        <div className=' m-5  border border-l-indigo-600'>
        <span className=" m-2">{productName }</span>
        <br/>
        <span>{format(count)}</span>
        <br/>
        <div className='p-4 '>
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
        setcount(count +1)
       }
    
    function handleDecrement (){
        setcount(count -1)
    }

    function handleDelete (){
        onDelete(id);

    }

}
export default FCount;