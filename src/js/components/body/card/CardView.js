import React, { Component } from 'react';

/* displays props in a card */
class CardView extends Component {
  render() {
    return (
      	<div className='container-fluid card' style={{textAlign: 'center'}}>

      		{/* card title */}
          	<h1 style={{color: '#000'}}>{this.props.data.name}</h1>

          	{/* card data */}
          	<span>{this.props.data.data}</span>

      	</div> /* end container */
    );
  }
}


export default CardView;

