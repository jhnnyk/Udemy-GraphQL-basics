// Named export - has a name. can have as many as you want
// Default export - has no name. you can only have one

const message = 'some message from myModule.js';
const myName = 'jhnnyk';
const location = 'Evergreen CO';

const getGreeting = name => {
  return `Welcome to the course ${name}`;
};

export { message, myName, getGreeting, location as default };
