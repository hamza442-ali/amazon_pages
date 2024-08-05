import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

import {HeroSection} from '@components/HeroSection';
import { Footer } from "@components/Footer";

 const Home = () => {
  return (
    <>
    <div className="panel-container">
      <div className="sidebar">
        <Link href='/sidebar'><FontAwesomeIcon icon={faBars} width={14} height={17} className="menu-icon"/></Link>
        <p>All</p>
      </div>
      <div className="panel-items">
        <Link href='/' className="items">Today's deals</Link>
        <Link href='/' className="items">Customer service</Link>
        <Link href='/' className="items">Registry</Link>
        <Link href='/' className="items">Gift Card</Link>
        <Link href='/' className="items">Sell</Link>
        </div>
        <div className="left-item">
        <Link href='/'>Amazon's response to COVID-19</Link>
      </div>
    </div>  
    <div>
        <HeroSection/>
        <Footer/>
    </div>
    </>
  )
}
 

export default Home; 
