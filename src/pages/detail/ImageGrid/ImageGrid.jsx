import React from 'react';

const ImageGrid = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <img crossOrigin="anonymous" src={props.gamb} className="img-thumbnail img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-xxl-3 col-lg-3 col-md-3 col-sm-3 col-3">
          <img crossOrigin="anonymous" src={props.gamb} className="img-thumbnail img-fluid" alt="" />
        </div>
        <div className="col-xxl-3 col-lg-3 col-md-3 col-sm-3 col-3">
          <img crossOrigin="anonymous" src={props.gamb} className="img-thumbnail img-fluid" alt="" />
        </div>
        <div className="col-xxl-3 col-lg-3 col-md-3 col-sm-3 col-3">
          <img crossOrigin="anonymous" src={props.gamb} className="img-thumbnail img-fluid" alt="" />
        </div>
        <div className="col-xxl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-2">
          <img crossOrigin="anonymous" src={props.gamb} className="img-thumbnail img-fluid" alt="" />
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
