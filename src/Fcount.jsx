import {useState} from 'react';

const FCount = ({productName , count:propCount , id , onDelete}) => {

    const [count , setcount] = useState(propCount);

    return(
        <div>
        <span className=" m-2">{productName }</span>
        <br/>
        <span>{format(count)}</span>
        <br/>
        <button onClick={handleIncrement}> + </button>
        <br/>
        <button onClick={handleDecrement}> - </button>
        <br/>
        <button onClick={handleDelete}>delete</button>
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