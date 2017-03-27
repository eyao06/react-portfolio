import React, { Component } from 'react';

import BarChart from './BarChart.js';

/* displays all barcharts */
class BarChartView extends Component {
  render() {
    return (

      <div className='container card shadow '>
        <div className='row card-block'>

          {/* bar charts of tools of knowledge */}
          <div className="col-md-4">
            <h4>{this.props.data.tools.title}</h4>
            {this.props.data.tools.data.map((item) =>

                <BarChart key={item.id} name={item.name} value={item.value} />

            )}

          </div> {/* end col */}

        {/* bar charts of personal skills */}
          <div className="col-md-4">
            <h4>{this.props.data.personalSkills.title}</h4>
            {this.props.data.personalSkills.data.map((item) =>
      
                <BarChart key={item.id} name={item.name} value={item.value} />

            )}
          </div> {/* end col */}

        {/* bar charts of operating systems */}
          <div className="col-md-4">
            <h4>{this.props.data.os.title}</h4>
            {this.props.data.os.data.map((item) =>
      
                <BarChart key={item.id} name={item.name} value={item.value} />

            )}
          </div> {/* end col */}
        </div> {/* end row */}
      </div> /* end container */

    );
  }
}


export default BarChartView;
