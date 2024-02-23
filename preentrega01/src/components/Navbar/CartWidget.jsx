import { useContext } from "react";
import iconCart from "../../assets/icons/cart-fill.svg";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        
        CantTotalProductos() > 0 ? <Link to={"/cart"} className="btn btn-primary position-relative ms-3 me-2 ">
            <img src={iconCart} alt="Carrito" width={60} />
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : ""
    )
}

export default CartWidget;



