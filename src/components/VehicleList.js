import React, { Component } from 'react';
import { getData } from '../api';

export default
class VehicleList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    getData((data) => {
      this.setState({
        data: JSON.parse(data),
      })
    });
  }

  render() {
    if(this.state.data) {
        return (
	        <div className="wrapper">
			      {this.state.data.vehicles.map(car =>
			        <div className="vehicle" key={car.id}>
			        		{car.media.map(media =>
			        		<a href={car.url} className="vehicle__link" key={car.id}>
					        	<div className="vehicle__media">
					        		<img src={media.url} className="vehicle__image" />
					        	</div>
				          	<div className="vehicle__data">
					          	<h2 className="vehicle__name">{media.name}</h2>
					          	<h3 className="vehicle__price">From £{media.price}</h3>
					          	<p className="vehicle__description">{media.desc}</p>
				          	</div>
					        </a>
			      			)}
			        </div>
			      )}
		      </div>
        )
      }

    return (<h1>Loading...</h1>);
  }
}