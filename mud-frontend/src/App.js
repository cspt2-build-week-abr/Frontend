import React  from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import Map from './Components/Map.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default App;
