import React, { Component } from 'react';
import RadarChart from './RadarChart.js';

/* displays raddar charts */
class RadarChartView extends Component {
  render() {
    return (

      <div className='container-fluid card shadow'>
        <div className='row-fluid card-block'>

          {/* displays radar chart */}
          {this.props.data.map((item) =>
            <RadarChart key={item.id} name={item.name} skillsData={item.data} style={item.style} chart={this.props.chart} />

          )}

        </div> {/* end row  */}
      </div> /* end container */
    );
  }
}


export default RadarChartView;
