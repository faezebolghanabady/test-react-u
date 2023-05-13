
const Navbar = (props) => {
    return(
        <div>
           <nav>
            <a>
                Navbar {calculatesum}
            </a>
           </nav>
        </div>
    )
}

function calculatesum() {
    let sum = 0 ;
    props.product.array.forEach(p => {
        sum += p.count;
        return sum;
    });
    
}
export default Navbar;