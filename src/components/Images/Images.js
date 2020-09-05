import React from "react";

const Images = (props) => {
  const imageStyle = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    alignSelf: "center",
  };
  return <img style={imageStyle} src={props.image} alt="" />;
};

export default Images;
