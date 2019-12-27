import React from "react"

import './portfolio.scss';

function PortfolioItem(props) {
  const {
    title,
    img,
    desc,
    link
  } = props;

  return (
    <div className='portfolio-item'>
      <div className='portfolio-thumbnail'>
        <img src={img} />
      </div>
      <div className='portfolio-content'>
        <h4>{title}</h4>
        <span>{desc}</span>
        <a href={link}>Read More</a>
      </div>
    </div>
  );
}
export default PortfolioItem