import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import '@testing-library/jest-dom';
import ProductOverview from '../ProductOverview.jsx';
import App from '../../../index.jsx';


const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}));
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
});
