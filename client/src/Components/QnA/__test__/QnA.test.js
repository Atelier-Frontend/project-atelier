import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QnA from '../QnA.jsx';
import AddQuestion from '../AddQuestion.jsx';
// import AnswersList from '../AnswersList.jsx';
// import IndividualAnswer from '../IndividualAnswer.jsx';
// import QuestionsList from '../QuestionsList.jsx';
import MoreQuestions from '../MoreQuestions.jsx';
import SearchBar from '../SearchBar.jsx';
import App from '../../../index.jsx';

const server = setupServer(
  rest.get('/qa/questions', (req, res, ctx) => {
    return res(ctx.status(200))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("App", () => {
  it('renders App component', async () => {
    render(<App />)
    await screen.findByRole('heading')
    expect(screen.getByRole('heading')).toHaveTextContent('Atelier')
  })
})

// describe("Q&A", () => {
//   it('loads and displays greeting', async () => {
//     const props = {
//       products: {
//         campus: "hr-rpp",
//         category: "Pants",
//         created_at: "2022-05-11T19:38:15.373Z",
//         default_price: "65.00",
//         description: "I'll tell you how great they are after I nap for a bit.",
//         id: 71700,
//         name: "Slacker's Slacks",
//         slogan: "Comfortable for everything, or nothing",
//         updated_at: "2022-05-11T19:38:15.373Z"
//       }
//     }
//     render (<QnA {...props} />)
//     await screen.findByText('Q')
//     expect(screen.getByText('Q')).toBeInTheDocument();
//   })
// })

describe("SearchBar", () => {
  it('Loads and displays search bar', async () => {
    render (<SearchBar />)
    await screen.findByText('search')
    expect(screen.getByText('search').toBeInTheDocument())
  })
})

// // describe("QuestionsList", () => {
// //   const questions= [
// //     {
// //       "question_id": 643336,
// //       "question_body": "Is it working?",
// //       "question_date": "2022-09-21T00:00:00.000Z",
// //       "asker_name": "ff11",
// //       "question_helpfulness": 0,
// //       "reported": false,
// //       "answers": {}
// //     }
// //   ]
// //   it('Loads and displays questions list', async () => {
// //     render (<QuestionsList {...questions} />)
// //     await screen.findByText('Q: ')
// //     expect(screen.getByText('Q: ').toBeInTheDocument())
// //   })
// // })

describe("MoreQuestions", () => {
  test('Loads and displays MoreQuestions Button', async () => {
    render (<MoreQuestions />)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveTextContent('ANSWERED QUESTIONS')
  })
})

describe("AddQuestion", () => {
  it('Loads and displays AddQuestion Button', async () => {
    render (<AddQuestion />)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveTextContent('QUESTION')
  })
})


