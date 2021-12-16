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

  render () {
    return (
      <>
        {this.state.sliderTiles.map( (sliderTile) =>
          <div
            className="slider"
            key={sliderTile}>
          </div>
        )}
      </>
    );
  }
}

export default Slider;
