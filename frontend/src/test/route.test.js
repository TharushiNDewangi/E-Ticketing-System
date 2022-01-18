const Add = require('../components/routes/Add');

test('adds 1 + 2 to equal 2', () => {
  expect(Add(1, 2)).toBe(2);
});