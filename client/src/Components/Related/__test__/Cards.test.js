import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from '../Cards.jsx'
require('dotenv').config();
const express = require('express');
const axios = require('axios');
jest.mock("axios");


var newproducts= {"id":71700,"campus":"hr-rpp","name":"Slacker's Slacks","slogan":"Comfortable for everything, or nothing","description":"I'll tell you how great they are after I nap for a bit.","category":"Pants","default_price":"65.00","created_at":"2022-05-11T19:38:15.373Z","updated_at":"2022-05-11T19:38:15.373Z"}

test('renders Related component', async (newproducts) => {

axios.get.mockResolvedValue(newproducts);
  render(<Cards products={newproducts} update={()=>{}} fun={()=>{}} />)
  expect(screen.getByTestId('custom-element')).toHaveTextContent('Related')
  })
  // ASSERT
