import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import '@testing-library/jest-dom';
import ProductOverview from '../ProductOverview.jsx';
import App from '../../../index.jsx';
import StyleSelector from '../../ProductOverview/StyleSelector.jsx';
import ImageGallery from '../../ProductOverview/ImageGallery.jsx';
import ProductInfo from '../../ProductOverview/ProductInfo/ProductInfo.jsx';
import Price from '../../ProductOverview/ProductInfo/Price.jsx';
import StarRating from '../../ProductOverview/ProductInfo/StarRating.jsx';
import Cart from '../../ProductOverview/Cart/AddToCart.jsx';
import QuantitySelector from '../../ProductOverview/Cart/QuantitySelector.jsx';
import SizeSelector from '../../ProductOverview/Cart/SizeSelector.jsx';
import data from './data.json';

const server = setupServer(
  rest.get('/products/71700', (req, res, ctx) => {
    console.log(res);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
  test('renders App component', async () => {
    render(<App />)
    await screen.findByRole('heading')
    expect(screen.getByRole('heading')).toHaveTextContent('Project Atelier')
  });
  
  test('renders ProductOverview component', async () => {
    render(<ProductOverview products={data} />)
  });

  // test('renders StyleSelector component', async () => {
  //   render(<StyleSelector />)
  // });

  // test('renders ImageGallery component', async () => {
  //   render(<ImageGallery />)
  // });

  // test('renders Price component', async () => {
  //   render(<Price />)
  // });

  // test('renders ProductInfo component', async () => {
  //   render(<ProductInfo />)
  // });

  // test('renders StarRating component', async () => {
  //   render(<StarRating />)
  // });

  // test('renders Cart component', async () => {
  //   render(<Cart />)
  // });

  // test('renders QuantitySelector component', async () => {
  //   render(<QuantitySelector />)
  // });

  // test('renders SizeSelector component', async () => {
  //   render(<SizeSelector />)
  // });
});
