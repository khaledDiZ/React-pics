import React from "react";

const ImageList = props => {
  const imgs = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{imgs}</div>;
};

export default ImageList;
