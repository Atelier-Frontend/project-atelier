import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import QnAMockData from './QnAMockData.js';
import App from '../../../index.jsx';
import QnA from '../QnA.jsx';
import AddQuestion from '../AddQuestion.jsx';
import AnswersList from '../AnswersList.jsx';
import IndividualAnswer from '../IndividualAnswer.jsx';
import QuestionsList from '../QuestionsList.jsx';
import MoreQuestions from '../MoreQuestions.jsx';
import SearchBar from '../SearchBar.jsx';
import ModalQuestion from '../ModalQuestion.jsx';
import ModalAnswer from '../ModalAnswer.jsx';
import ImageHandler from '../ImageHandler.jsx';
import AnswerPhotos from '../AnswerPhotos.jsx';
import FullSizeAnswerPhoto from '../FullSizeAnswerPhoto';

// jest.mock('axios');

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

describe("Q&A", () => {
  it('loads and displays greeting', async () => {

    render (<QnA props={QnAMockData.props}/>)
    // axios.get.mockResolvedValue(QnAMockData.props)
    await screen.findByText('Q')
    expect(screen.getByText('Q')).toBeInTheDocument();
  })
})

describe("SearchBar", () => {
  it('Loads and displays search bar', async () => {
    render (<SearchBar />)
    await screen.findByPlaceholderText('Have a question? Search for answers…')
    expect(screen.getByPlaceholderText('Have a question? Search for answers…')).toBeInTheDocument()
  })

  xit('Updates on change', () => {
    const setSearch = jest.fn((value) => {})
    const { queryByPlaceholderText } = render(<SearchBar setSearch={setSearch} props={QnAMockData.questions}/>)
    const searchInput = queryByPlaceholderText('Have a question? Search for answers…')
    fireEvent.change(searchInput, { target: { value: 'test' } })
    expect(searchInput.value).toBe('test')
  })

})

describe("QuestionsList", () => {
  it('Loads and displays questions list', async () => {
    render (<QuestionsList questions={QnAMockData.questions} />)
    await screen.findByText('Q:')
    expect(screen.getByText('Q:')).toBeDefined()
  })
})

describe("MoreQuestions", () => {
  it('Loads and displays More Questions Button', async () => {
    render (<MoreQuestions />)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveTextContent('ANSWERED QUESTIONS')
  })
})

describe("AddQuestion", () => {
  it('Loads and displays AddQuestion Button', async () => {
    render (<AddQuestion />)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveTextContent('ADD A QUESTION')
  })
})

describe("Individual Answer", () => {
  it('Loads and displays answer tile', async () => {
    render (<IndividualAnswer answers={QnAMockData.answers} />)
    await screen.findAllByText('Helpful?')
    expect(screen.getAllByText('Helpful?')).toBeDefined()
  })
})

describe("Add Question Form ", () => {
  it('Loads and displays button', async () => {
    render (<ModalQuestion />)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveTextContent('Submit');
    expect(screen.getByRole('button')).toHaveTextContent('Close')
  })
})

describe("Add Answer Form ", () => {
  it('Loads and displays form', async () => {
    render (<ModalAnswer />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('Loads and displays answer body field', async () => {
    render (<ModalAnswer />)
    await screen.findByPlaceholderText('Type your answer here...')
    expect(screen.getByPlaceholderText('Type your answer here...')).toBeInTheDocument()
  })

  it('Loads and displays button', async () => {
    render (<ModalAnswer />)
    await screen.findByRole('button')
    expect(screen.getByRole('button')).toHaveTextContent('Submit')
    expect(screen.getByRole('button')).toHaveTextContent('Close')
  })
})

describe("Answer Photos", () => {
  it('alt contains correct value', async () => {
    render (<AnswerPhotos props={{photos: [{url: 'test'}]}}/>)
    await screen.findByRole('image')
    expect(screen.getByRole('image')).toHaveTextContent('photo')
  })
})

describe("Image Handler", () => {
  it('Displays statement when user uploaded images', async () => {
    render (<ImageHandler props={{len: 2}} />)
    await screen.findByText(`You have select 2 image(s)`)
    expect(screen.getByText(`You have select 2 image(s)`)).toBeDefined()
  })
})

describe("Full Size Image", () => {
  it('alt contains correct value', async () => {
    render (<FullSizeAnswerPhoto />)
    await screen.findByRole('image')
    expect(screen.getByRole('image')).toHaveTextContent('large-img')
  })
})