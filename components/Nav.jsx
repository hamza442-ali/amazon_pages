import Link from "next/link";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faShoppingCart,
    faLocationDot,
} from "@fontawesome/free-solid-svg-icons";

export const Nav = () => {
  return (
    <nav className="navbar">
        <Link href='/' className="amazonLogo borderNav">amazon</Link>
        <Link href='/'  className="nav-address borderNav">
            <p className="from">Deliver to</p>
            <div className="address-icon">
                <FontAwesomeIcon icon={faLocationDot} width={16} height={16}/>
                <p>Pakistan</p>
            </div>     
        </Link>
        <div className="searchbar">
            <select 
            aria-placeholder="All"
            className="searchSelect">
                <option>All</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Apparel</option>
            </select>
            <input type="text" className="searchInput"/>
            <button className="searchButton"><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
        </div>
        <Link href="/" className="borderNav">Home</Link>
        <Link href="/" className="borderNav">About</Link>
        <Link href="/" className="borderNav">Contact</Link>
        <Link href="/" className="borderNav">Products</Link>
        <div className="cart borderNav">
            <Link href="/cart" className="cartIcon">
                <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <span>cart</span>
        </div>
    </nav>
  );
};
