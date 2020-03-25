import React from "react";
import "../App.css";

import Dhaka from "./Dhaka";
import Chittagong from "./Chittagong";
import Sylhet from "./Sylhet";
import Barisal from "./Barisal";
import Khulna from "./Khulna";
import Rajshahi from "./Rajshahi";
import Rangpur from "./Rangpur";
import Mymensingh from "./Mymensingh";

function Map(props) {
  return (
    <div className="map-divisions">
      <svg
        enable-background="new -106.403 -201.859 629.266 880.536"
        height="25rem"
        id="district_41"
        viewBox="-106.403 -201.859 629.266 880.536"
        width="21rem"
        x="0px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        y="0px"
        centerX="190"
        centerY="80"
      >
        <Dhaka affected={"৩০"} dead={"৭"} recovered={"৪৫"} />
        <Chittagong affected={"৩০"} dead={"৭"} recovered={"৪৫"} />
        <Sylhet affected={"৩০"} dead={"৭"} recovered={"৪৫"} />
        <Rajshahi affected={"৩০"} dead={"৭"} recovered={"৪৫"} />
        <Rangpur affected={"৩০"} dead={"৭"} recovered={"৪৫"} />
        <Khulna affected={"৩০"} dead={"৭"} recovered={"৪৫"} />
        <Mymensingh affected={"৩০"} dead={"৭"} recovered={"৪৫"} />
        <Barisal affected={"৩০"} dead={"৭"} recovered={"৪৫"} />
      </svg>
    </div>
  );
}

export default Map;
