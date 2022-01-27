import React from "react";

const Destination = ({ travel }) => {
  return (
    <div>
      {travel.id + " "}
      {travel.location + " "}
      {travel.year + " "}
      {travel.comment}
    </div>
  );
};

export default Destination;
