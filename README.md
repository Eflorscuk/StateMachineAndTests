# JavaScript State Machine Example with REST Testing

This repository contains a practical example of a state machine implemented in JavaScript, accompanied by tests using the REST approach. The main goal is to provide a deep understanding of how a state machine works through a practical and interactive case.

## Features

- Implementation of a state machine in JavaScript.
- Comprehensive testing using REST to ensure the integrity and functionality of the state machine.
- Clear documentation to facilitate understanding and usage of the example.

## How to Use

1. Clone this repository to your local machine.
2. Run ```npm install```.
3. Run ```npm run dev```.
4. Explore the source code to understand the implementation of the state machine.
5. Run the REST tests to verify the behavior of the state machine in different scenarios.

This project was developed to provide a solid foundation for learning and practically understanding state machines in JavaScript, along with the use of REST tests to validate their operation.

## Example for routes

1. GET http://localhost:3000
2. POST http://localhost:3000/tasks and put the date in -> body -> raw -> json (Postman).
3.  PUT http://localhost:3000/tasks/1 (1 is a id example) and put in -> body -> raw -> json a update date.

## Test
1. To run ```npm test```