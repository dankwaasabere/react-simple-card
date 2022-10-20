import React from "react";
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";
function Simplecard() {
  return (
    <div className="real-estate">
      <Image />
      <div className="reality-group">
        <Title />
        <Description />
      </div>
    </div>
  );
}

export default Simplecard;
