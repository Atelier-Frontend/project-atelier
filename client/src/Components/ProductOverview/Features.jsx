import React from 'react';
import { BiCheck } from 'react-icons/bi';

export default function Features(props) {
  return (
    <div className='features'>
      {props.features.map((feature, index) => (
        <div className='feature-item' key={index}>
          <div className='feature-mark'><BiCheck /></div>
          <div className='feature-type'>{feature.feature}</div>
          <div className='feature-value'>{feature.value}</div>
        </div>))}
    </div>)
};