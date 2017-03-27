import React, { Component } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

import '../../../../css/skillsChart.css';

/* radar chart */
class SkillsChart extends Component {
  render() {
    return (
      <div className={this.props.chart.cols} style={{textAlign: 'center'}}>

        {/* radar name */}
        <h4>{this.props.name}</h4>

      {/* radar chart */}
        <RadarChart cx={this.props.chart.xPos} cy={this.props.chart.yPos} outerRadius={100} width={400} height={400} data={this.props.skillsData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <Radar name={this.props.name} dataKey="value" stroke={this.props.style.radarBorder} fill={this.props.style.radar} fillOpacity={this.props.style.radarOpacity}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={18}/>
        </RadarChart>
        
      </div> /* end div */
    );
  }
}


export default SkillsChart;
