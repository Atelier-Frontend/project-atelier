import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import RnR from '../RnR.jsx';
import Recommend from '../Ratings/Recommend.jsx';
import RatingsChart from '../Ratings/RatingsChart.jsx';
import RatingsBreakdown from '../Ratings/RatingsBreakdown.jsx';
// import AddReview from '../Reviews/AddReview.jsx';
import MoreReviews from '../Reviews/MoreReviews.jsx';



const server = setupServer(
  rest.get('/reviews', (req, res, ctx) => {
    return res(ctx.status(200))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


// describe("RnR", () => {
//   it('loads and displays heading', async () => {
//     render (<RnR {...props} />)
//     await screen.findByText('Ratings')
//     expect(screen.getByText('Ratings')).toBeDefined();
//   })
// })

describe("Percentage of recommendations", () => {
  it('Loads and displays percentage of recommendations', async () => {
    render (<Recommend />)
    await screen.findByText('recommend')
    expect(screen.getByText('recommend')).toBeDefined()
  })
})

describe("Reatings Chart", () => {
  it('Loads and displays ratings chart', async () => {
    render (<RatingsChart />)
    await screen.findByText('5stars')
    expect(screen.getByText('5stars')).toBeDefined()
  })
})

describe("Reatings Breakdown", () => {
  it('Loads and displays ratings breakdown', async () => {
    render (<RatingsBreakdown />)
    await screen.findByText('Size')
    expect(screen.getByText('Size')).toBeDefined()
  })
})


describe("MoreReviews", () => {
  test('Loads and displays MoreReviews Button', async () => {
    render (<MoreReviews />)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveTextContent('MORE REVIEW')
  })
})

// describe("AddQReview", () => {
//   test('Loads and displays AddReview Button', async () => {
//     render (<AddReview />)
//     await screen.findByRole('button')
//     expect(screen.getByRole('button')).toHaveTextContent('ADD A REVIEW')
//   })
// })


