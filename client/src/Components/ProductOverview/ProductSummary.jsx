import React from 'react';

export default function ProductSummary(props) {
  return (
    <div className='product-summary'>
      <div className='slogan'>{props.slogan}</div>
      <div className='prod-description'>{props.description}</div>
    </div>)
};