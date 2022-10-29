import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductOverview from '../ProductOverview.jsx';
import App from '../../../index.jsx';
import data from './data.json';

const server = setupServer(
  rest.get('/products/', (req, res, ctx) => {
    return res(ctx.status(200))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders ProductOverview component', async () => {
  // ARRANGE
  render(<App />)

})

test('renders ProductSummary component', async () => {
  // ARRANGE
  render(<ProductOverview />)

})

// test('renders StyleSelector component', async () => {
//   // ARRANGE
//   render(<StyleSelector />)

// })