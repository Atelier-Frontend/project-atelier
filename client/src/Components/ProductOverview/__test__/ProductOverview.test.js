import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductOverview from '../ProductOverview.jsx';
import ImageGallery from '../ImageGallery.jsx';
import StyleSelector from '../StyleSelector.jsx';
import ProductSummary from '../ProductSummary.jsx';
import Price from '../ProductInfo/Price.jsx';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import StarRating from '../ProductInfo/StarRating.jsx';
import AddtoCart from '../Cart/AddtoCart.jsx';
import QuantitySelector from '../Cart/QuantitySelector.jsx';
import SizeSelector from '../Cart/SizeSelector.jsx';
import App from '../../../index.jsx';
import data from './data.json';

// const server = setupServer(
//   rest.get('/products/', (req, res, ctx) => {
//     return res(ctx.status(200))
//   })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe("App", () => {
  it('renders App component', async () => {
    render(<App />)
    await screen.findByRole('heading')
    expect(screen.getByRole('heading')).toHaveTextContent('ATELIER')
  })
})

describe("ProductOverview", () => {
  it('renders Product Overview component', async () => {
    render(<ProductOverview />)
  })
})

describe("Inage Gallery", () => {
  it('renders Image Gallery component', async () => {
    render(<ImageGallery/>)
  })
})

describe("Style Selector", () => {
  it('renders Style Selector component', async () => {
    render(<StyleSelector/>)
  })
})

describe("Product Summary", () => {
  it('renders Product Summary component', async () => {
    render(<ProductSummary/>)
  })
})

describe("Price", () => {
  it('renders Price component', async () => {
    render(<Price/>)
  })
})

describe("ProductInfo", () => {
  it('renders ProductInfo component', async () => {
    render(<ProductInfo/>)
  })
})

describe("Star Rating", () => {
  it('renders Star Rating component', async () => {
    render(<StarRating/>)
  })
})

describe("AddtoCart", () => {
  it('renders AddtoCart component', async () => {
    render(<AddtoCart/>)
  })
})

describe("QuantitySelector", () => {
  it('renders QuantitySelector component', async () => {
    render(<QuantitySelector/>)
  })
})

describe("SizeSelector", () => {
  it('renders SizeSelector component', async () => {
    render(<SizeSelector/>)
  })
})