import React, { Component } from "react";
import { connect } from "react-redux";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.map = new Map({});
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { center, zoom, extent } = this.props;
    this.map.setTarget(this.mapRef.current);
    this.map.setView(
      new View({
        center,
        zoom,
        extent,
      })
    );
    this.map.addLayer(
      new TileLayer({
        source: new OSM(),
      })
    );

    this.map.on("moveend", () => {
      let center = this.map.getView().getCenter();
      let zoom = this.map.getView().getZoom();
      let extent = this.map.getView().calculateExtent();
      this.props.onMapChangeView({
        center,
        zoom,
        extent,
      });
    });
  }

  componentWillUpdate(newProps) {
    this.map.setView(
      new View({
        center: newProps.center,
        zoom: newProps.zoom,
      })
    );
  }

  render() {
    return <div ref={this.mapRef} style={{ height: "70vh" }}></div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);
