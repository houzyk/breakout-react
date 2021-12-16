import React, { Component } from "react";

import Slider from './Slider';
import Block from "./Block";

class Board extends Component {
  constructor (props) {
    super(props);

    const tiles = [];
    for (let index = 0; index < (100 - 10); index++) tiles.push(index);

    this.state = {
      tiles: tiles
    };
  }

  render () {
    return (
      <div className="board">
        {this.state.tiles.map( (tile) =>
          <Block key={tile} tileIndex={tile}/>
        )}
        <Slider />
      </div>
    );
  }
}

export default Board;
