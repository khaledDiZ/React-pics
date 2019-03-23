import "./ImageList.css";
import React from "react";
import ImageCrad from "./ImageCard";

const ImageList = props => {
  const imgs = props.images.map(image => {
    return <ImageCrad key={image.id} image={image} />;
  });

  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
