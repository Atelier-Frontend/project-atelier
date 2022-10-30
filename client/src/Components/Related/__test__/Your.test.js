import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Your from '../Your.jsx'
import App from '../../../index.jsx';

test('renders Related component', async () => {
  // ARRANGE
var newproducts;
  // ACT
  axios.get('/products/product_id', {params: {id: 71700}})
  .then((response)=> {
  newproducts = response.data
  render(<Your products={newproducts} />)
  // expect(screen.getByTestId('')).toHaveTextContent('')
  })
  .catch((err)=> {
    throw(err);
  })

  // ASSERT
  expect(screen.getByH4Text('your')).toHaveTextContent('Your')
})