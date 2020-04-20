import React from 'react';
import './Business.css';

class Business extends React.Component {
    render(){
      const { business } = this.props
      const url = `https://www.google.com/maps/place/${business.mapsAddress}`
        return(            
          <div className="Business">
            <div className="image-container">
              <a target="_blank" href={business.url} rel="noopener noreferrer"><img src={business.imageSrc} alt={business.name} /></a>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
              <div className="Business-address">
                <p><a href={url} target="_blank" rel="noopener noreferrer">{business.address}</a></p>
                <p>{business.city}</p>
                <p>{business.state} {business.zipCode}</p>
              </div>
              <div className="Business-reviews">
                <h3>{business.category}</h3>
                <h3 className="rating">{business.rating} Stars</h3>
                <p>{business.viewCount} Reviews</p>
              </div>
            </div>
          </div>
        )
    }
}

export default Business;