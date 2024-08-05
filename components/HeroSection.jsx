import { Card } from "./Card";
import { cardData } from "./cardData";

export const HeroSection = () => {
  return (
    <>
    <div className="hero-section">
      {cardData.map(pro => (
         <Card
            key={pro.id}
            title={pro.title}
            image={pro.image}
         /> 
      ))}
    </div>

    <div className="hero_items">
      <div className="sales">
      Best Sellers in Sports & Outdoors
      </div>
    <div className="items_details">
     
  
      
       <img
        src="/assets/images/item2.jpg"
      />
       <img
        src="/assets/images/item3.jpg"
      />
       <img
        src="/assets/images/item4.jpg"
      />
      <img
        src="/assets/images/item1.jpg"
      />
       <img
        src="/assets/images/item5.jpg"
      />

    </div>
    </div>


    </>
  )
}
