import React from "react";

export const Tile = ({ someObject }) => {
  return (
    <div className="tile-container">
      {
        Object.keys(someObject).map((objectKey, index) => {
          if (index == 0) {
            return <p className="tile tile-title" key={index}>{someObject[objectKey]}</p>;
          }
          return <p className="tile" key={index}>{someObject[objectKey]}</p>
        })
      }
    </div>
  );
};
