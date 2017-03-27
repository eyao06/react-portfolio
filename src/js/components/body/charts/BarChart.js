import React, { Component } from 'react';

/* bar chart */
class BarChart extends Component {
  render() {

          /* convert number into string and concat % to get a string percentage */
          const num = this.props.value.toString()
          const width = num.concat("%")

    return (

        <div className="container-fluid">

          {/* bar title */}
          <h5>{this.props.name}</h5>

          {/* bar progression */}
          <div className="progress">
            <div className="progress-bar active" role="progressbar" aria-valuenow={this.props.value} aria-valuemin="0" aria-valuemax="100" style={{width: width}} />
          </div>

        </div> /* end container */

    );
  }
}

export default BarChart;

