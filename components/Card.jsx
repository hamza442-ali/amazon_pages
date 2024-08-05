export const Card = ({ title, image }) => {
    return (
      <div className="card-container">
        <div className="cards">
          <h2 className="card-title">{title}</h2>
          <img src={image} alt="card" className="card-image" />
        </div>
      </div>
    )
  }
  