import React from 'react';

const Card = ({title = "My Title", src = "ImgSrc", text = "my Text", btnText = "MyButton"}) => {
  return(
    <div className="card" style={{width: "18rem"}}>
      <img
        src={src}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {text}
        </p>
        <a href="#" className="btn btn-success">{btnText}</a>
      </div>
    </div>    
  )
}

export default Card;