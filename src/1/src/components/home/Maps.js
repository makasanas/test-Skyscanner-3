import React, { Component } from 'react'
import ReactMapGL, { Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class Maps extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "inherit",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    },
    showPopup: true,
  };


  onViewportChange = (viewport)=>{
    this.setState({viewport})
    console.log("asd")
  }

  render() {
    const {showPopup} = this.state;
    return (
      <div className="map">
        <ReactMapGL
          mapboxApiAccessToken="pk.eyJ1IjoiaGltYW5raGQiLCJhIjoiY2p1NzAwcTk4MWsxcjRlbnJvMHZqbnA2NCJ9.TWHl2ZQf7BJQV6oQDEuk8A"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          {...this.state.viewport}
        >
        {showPopup && <Popup
          latitude={37.78}
          longitude={-122.41}
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.setState({showPopup: false})}
          anchor="top" >
          <div>We are here</div>  
        </Popup>}

        </ReactMapGL>
      </div>
    )
  }
}
