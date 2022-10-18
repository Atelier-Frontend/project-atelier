import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Related from '../Related.jsx'
require('dotenv').config();
const express = require('express');
const axios = require('axios');
jest.mock("axios");

// return all styles available for a given product
var test2 = {
        "data": {
            "product_id": "71698",
            "results": [
                {
                    "style_id": 444224,
                    "name": "Black Lenses & Black Frame",
                    "original_price": "69.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": null,
                            "url": null
                        }
                    ],
                    "skus": {
                        "null": {
                            "quantity": null,
                            "size": null
                        }
                    }
                },
                {
                    "style_id": 444225,
                    "name": "Black Lenses & Gold Frame",
                    "original_price": "69.00",
                    "sale_price": null,
                    "default?": true,
                    "photos": [
                        {
                            "thumbnail_url": null,
                            "url": null
                        }
                    ],
                    "skus": {
                        "null": {
                            "quantity": null,
                            "size": null
                        }
                    }
                },
                {
                    "style_id": 444226,
                    "name": "Gold Lenses & Black Frame",
                    "original_price": "69.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": null,
                            "url": null
                        }
                    ],
                    "skus": {
                        "null": {
                            "quantity": null,
                            "size": null
                        }
                    }
                },
                {
                    "style_id": 444227,
                    "name": "Gold Lenses & Gold Frame",
                    "original_price": "69.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": null,
                            "url": null
                        }
                    ],
                    "skus": {
                        "null": {
                            "quantity": null,
                            "size": null
                        }
                    }
                }
            ]
        },
        "status": 200,
        "statusText": "OK",
        "headers": {
            "content-length": "857",
            "content-type": "application/json; charset=utf-8",
            "date": "Sat, 15 Oct 2022 20:07:24 GMT",
            "etag": "W/\"359-hHCCN+WzF01oMWCppAW0mRmeUiY\"",
            "x-powered-by": "Express"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "env": {
                "FormData": null
            },
            "headers": {
                "Accept": "application/json, text/plain, */*"
            },
            "params": {
                "id": 71698
            },
            "method": "get",
            "url": "/products/product_id/styles"
        },
        "request": {}
    }



// return the ID's of products related to specified product_id
var related_data = {
        "data": [
            71697,
            71698,
            71700,
            71701,
            71704
        ],
        "status": 200,
        "statusText": "OK",
        "headers": {
            "content-length": "31",
            "content-type": "application/json; charset=utf-8",
            "date": "Sat, 15 Oct 2022 20:09:44 GMT",
            "etag": "W/\"1f-xpNo9tTT8kB+nXh97pxx3XWrp0k\"",
            "x-powered-by": "Express"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "env": {
                "FormData": null
            },
            "headers": {
                "Accept": "application/json, text/plain, */*"
            },
            "params": {
                "id": 71700
            },
            "method": "get",
            "url": "/products/product_id/related"
        },
        "request": {}
    }







// ---- RELATED ITEM AND OUTFIT CREATION ROUTES ---- //


var newproducts= {"id":71700,"campus":"hr-rpp","name":"Slacker's Slacks","slogan":"Comfortable for everything, or nothing","description":"I'll tell you how great they are after I nap for a bit.","category":"Pants","default_price":"65.00","created_at":"2022-05-11T19:38:15.373Z","updated_at":"2022-05-11T19:38:15.373Z"}
// jest.mock('axios', () => jest.fn(() => Promise.resolve('teresa teng')));

test('renders Related component', async (newproducts) => {

axios.get.mockResolvedValue(test2);
  render(<Related products={newproducts} update={()=>{}} fun={()=>{}} />)
  expect(screen.getByTestId('custom-element')).toHaveTextContent('Related')
  })
  // ASSERT
