import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ someArray }) => {
  return (
    <div>
      {
        someArray.map((object, index) => <Tile someObject={object} key={index} />)
      }
    </div>
  );
};
