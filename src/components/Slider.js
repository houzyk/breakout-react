import React, { Component } from "react";

class Slider extends Component {
  constructor (props) {
    super(props);

    const sliderTiles = [];
    for (let index = 0; index < 10; index++) sliderTiles.push(index);

    this.state = {
      sliderTiles: sliderTiles
    };
  }

  handleClass = (tileIndex) => {
    return (tileIndex > 3 && tileIndex < 6) ? "active slider" : "slider";
  }

  render () {
    return (
      <>
        {this.state.sliderTiles.map( (sliderTile) =>
          <div
            className={this.handleClass(sliderTile)}
            key={sliderTile}>
          </div>
        )}
      </>
      
    );
  }
}

export default Slider;
