# Guidelines
Submit the task on GIT.

Code should work on the latest version of Chrome.

Stack: ES6/ES7, React, Redux

## Max time for the task - 1 hour
Submit everything that you were able to implement within one hour

## Mock (you should not provide any changes in mock file)

Creates 400 random properties (with id from 10000 to 10399) (200 with type Home,  200 with type Condo).
Each second the price and timestamp of the property is updated. Update of each property is being sent independently
within the subscription.
To create the subscription in src/App.js:

properties$.subscribe((propertyUpdate) => console.log('propertyUpdate'));

The mock is Rx.js observable. You should not change it or work with it directly by using any operators on the stream.
The knowledge of Rx.js is not required, it is used in the test only to generate frequent updates of data.

## Task to implement

1. Create the table of all the properties with such columns:
    - ID
    - Address
    - Price
    - Last Update
    - Type

## !!The table should be visually updated with the latest data each 2 seconds!!
It means that the table should be rerendered with the latest data for each property only each 2 seconds
## Functionality for the table
1. Add an input, that will be used for filtering properties by **Address**.
2. If a user clicks enter on the input - the table should be filtered according to the value of the input (if the property has at least part of the address correctly - it will be included in the result)

Use the best practises regarding React/Redux applications in order to achieve the best performance and UX in this
mini-application.

## Additional task (only if you have time to do it)
Cover the application with tests using Enzyme and Sinon (the prominent functionality that you think should be covered by tests)

## Run the boilerplate
    - npm install
    - npm start
