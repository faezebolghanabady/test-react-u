

const Advertising = ({productName , city , name}) =>{
    return(
        <div className=" border border-gray-500  p-3 flex flex-row">
            <div>
                <img className="w-16 h-16"  src="./p/sib.jpg" alt="" ></img>
            </div>

            <div className="mr-3">
                <p>{name}</p>
                <p>{productName}</p>
                <p>{city}</p>
            </div>

            <div>
            </div>
            

        </div>
    )
}
export default Advertising;