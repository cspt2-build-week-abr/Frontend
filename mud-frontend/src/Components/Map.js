import React  from 'react';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, MarkSeries, LineMarkSeries} from 'react-vis';

class Map extends React.Component {
  render() {
    const data = [
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 1, y: 1},
        {x: 1, y: 2},
        {x: 1, y: 3},
        {x: 2, y: 2},
        {x: 3, y: 3}
    ];
    return (
      <div>
        <XYPlot height={300} width={300}>
        <LineMarkSeries
            data={data}
            lineStyle={{stroke:"red"}}
            markStyle={{stroke:"blue"}}
        />
        </XYPlot>
      </div>
    );
  }
}

export default Map;
