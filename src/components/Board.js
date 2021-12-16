import React, { Component } from "react";

class Board extends Component {
  constructor (props) {
    super(props);

    const tiles = [];
    for (let index = 0; index < 10000; index++) {
      tiles.push(index);
    }

    this.state = {
      tiles: tiles
    };
  }

  render () {
    return (
      <div className="board">
        {this.state.tiles.map( (tile) =>
          <div
            className="tile"
            key={tile}>
          </div>
        )}
      </div>
    );
  }
}

export default Board;
